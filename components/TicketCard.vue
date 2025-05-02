<script setup lang="ts">
import type { Ticket } from '~/types/ticket';

const props = defineProps<{ ticket: Ticket }>()

const formatDuration = (mins: number) => {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return `${h}ч ${m}м`
}

const formatDate = (dateStr: string, duration: number) => {
  const departureDate = new Date(dateStr)
  const arrivalDate = new Date(departureDate.getTime() + duration * 60 * 1000)

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
    })

  return `${formatTime(departureDate)} – ${formatTime(arrivalDate)}`
}

const getStopsText = (stops: string[]) => {
  if (stops.length === 0) return 'Без пересадок'
  if (stops.length === 1) return '1 Пересадка'
  return `${stops.length} Пересадки`
}
</script>

<template>
  <div class="ticket">
    <header class="ticket__header">
      <div class="ticket__price">{{ Intl.NumberFormat('uk-UA').format(ticket.price) }} ₴</div>
      <img class="ticket__carrier" :src="`https://pics.avs.io/99/36/${ticket.carrier}.png`" alt="airline" />
    </header>


    <div class="ticket__segment">
      <template v-for="(segment, i) in ticket.segments" :key="i">
        <div class="ticket__column">
          <div class="ticket__title">{{ segment.origin }} – {{ segment.destination }}</div>
          <div class="ticket__info">{{ formatDate(segment.date, segment.duration) }}</div>
        </div>

        <div class="ticket__column">
          <div class="ticket__title">Тривалість</div>
          <div class="ticket__info">{{ formatDuration(segment.duration) }}</div>
        </div>

        <div class="ticket__column">
          <div class="ticket__title">
            {{ getStopsText(segment.stops) }}
          </div>
          <div class="ticket__info">{{ segment.stops.join(', ') }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ticket {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  &__price {
    font-weight: 600;
    font-size: 2rem;
    line-height: 100%;
    color: #2196f3;
  }

  &__carrier {
    margin-right: 16px;
  }

  &__segment {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  &__title {
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #a0b0b9;
  }

  &__info {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>
