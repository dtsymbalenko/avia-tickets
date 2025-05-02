# Avia Tickets

Avia Tickets is a web application for searching and filtering airline tickets. The app allows users to filter tickets by the number of stops, price, and other parameters. Built with **Nuxt 3**, it provides a user-friendly interface for working with ticket data.

---

## Features

- **Ticket Filtering**:
  - By the number of stops (non-stop, 1 stop, 2 stops, etc.).
  - Select all filters with a single click.
- **Ticket Sorting**:
  - By price (cheapest).
  - By travel time (fastest).
  - By optimal balance of price and time.
- **Data Loading**:
  - Asynchronous ticket loading from the server.
  - Infinite scrolling (load more tickets).
- **Performance Optimization**:
  - Efficient filtering and sorting logic.
  - Lazy loading of components and images.

---

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

---

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

---

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview the production build:

```bash
# npm
npm run preview
```

---

## Project Structure

```plaintext
.
├── components/         # Vue components (e.g., Filters, TicketCard)
├── composables/        # Application logic (e.g., useTickets)
├── pages/              # Application pages (e.g., index.vue)
├── assets/             # Styles, images, and other resources
├── public/             # Static files
├── nuxt.config.ts      # Nuxt configuration
└── README.md           # Project documentation
```

---

## Technologies

- **Nuxt 3** — Framework for building Vue applications.
- **TypeScript** — For type safety.
- **SCSS** — For styling.
- **Nuxt Image** — For image optimization.

---

## Contacts

If you have any questions or suggestions, feel free to reach out via [GitHub Issues](https://github.com/your-repository/issues).