# Studio Ledger Portfolio

A single page React portfolio platform for a creative agency. The app displays a responsive project archive, filters projects by search term, and includes a form for publishing new projects dynamically.

## Features

- Landing page inspired by a modern agency portfolio layout
- Reusable React components for the header, search panel, form, grid, and cards
- State management with `useState` and derived filtering with `useMemo`
- Dynamic add-project form with controlled inputs
- Search across title, category, client, year, description, and tags
- Responsive layout for desktop, tablet, and mobile screens
- Jest and React Testing Library coverage for rendering, filtering, and adding projects

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Usage

Open the local development URL from Vite, browse the project archive, use the search field to filter projects, and submit the form to add a new project to the top of the list.

## Known Limitations

- Added projects are stored in React state only, so they reset when the page refreshes.
- Image URLs are user-provided; invalid URLs may show a broken image in the project card.
- There is no backend or authentication layer in this lab version.
