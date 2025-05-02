import { ref, computed } from 'vue'
import { ActiveTab, type Ticket, type TicketApiResponse } from '~/types/ticket'

export function useTickets() {
  const searchId = ref<string | null>(null)
  const tickets = ref<Ticket[]>([])
  const loading = ref(true)

  const activeFilters = ref<number[]>([])
  const activeTab = ref<ActiveTab>(ActiveTab.CHEAP)

  const visibleCount = ref(5)

  const fetchSearchId = async () => {
    const res = await fetch('https://avs-backend.vercel.app/search')
    const data = await res.json()
    searchId.value = data.searchId
  }

  const fetchTickets = async () => {
    if (!searchId.value) return

    try {
      const res = await fetch(`https://avs-backend.vercel.app/tickets?searchId=${searchId.value}`)
      const data: TicketApiResponse = await res.json()
      tickets.value.push(...data.tickets)
      if (!data.stop) {
        await fetchTickets()
      } else {
        loading.value = false
      }
    } catch (e) {
      await fetchTickets()
    }
  }

  const startLoadingTickets = async () => {
    await fetchSearchId()
    await fetchTickets()
  }

  // const filteredTickets = computed(() => {
  //   let result = [...tickets.value]

  //   if (activeFilters.value.length) {
  //     result = result.filter(ticket =>
  //       ticket.segments.every(segment => activeFilters.value.includes(segment.stops.length))
  //     )
  //   }

  //   if (activeTab.value === ActiveTab.CHEAP) {
  //     result.sort((a, b) => a.price - b.price)
  //   } else if (activeTab.value === ActiveTab.FAST) {
  //     result.sort((a, b) =>
  //       a.segments.reduce((acc, s) => acc + s.duration, 0) -
  //       b.segments.reduce((acc, s) => acc + s.duration, 0)
  //     )
  //   } else if (activeTab.value === ActiveTab.OPTIMAL) {
  //     result.sort((a, b) =>
  //       (a.price + a.segments.reduce((acc, s) => acc + s.duration, 0)) -
  //       (b.price + b.segments.reduce((acc, s) => acc + s.duration, 0))
  //     )
  //   }

  //   return result
  // })
  const filteredTickets = computed(() => {
    return tickets.value
      .filter(ticket =>
        !activeFilters.value.length ||
        ticket.segments.every(segment => activeFilters.value.includes(segment.stops.length))
      )
      .sort((a, b) => {
        if (activeTab.value === ActiveTab.CHEAP) {
          return a.price - b.price;
        } else if (activeTab.value === ActiveTab.FAST) {
          return a.segments.reduce((acc, s) => acc + s.duration, 0) -
                 b.segments.reduce((acc, s) => acc + s.duration, 0);
        } else if (activeTab.value === ActiveTab.OPTIMAL) {
          return (a.price + a.segments.reduce((acc, s) => acc + s.duration, 0)) -
                 (b.price + b.segments.reduce((acc, s) => acc + s.duration, 0));
        }
        return 0;
      });
  });

  const visibleTickets = computed(() =>
    filteredTickets.value.slice(0, visibleCount.value)
  )

  const loadMore = () => {
    visibleCount.value += 5
  }

  return {
    tickets,
    loading,
    startLoadingTickets,
    activeFilters,
    activeTab,
    visibleTickets,
    loadMore
  }
}
