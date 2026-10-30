# FLICK — Movie Discovery App

A responsive movie discovery application built with **React, TypeScript, and Vite**, powered by [The Movie Database (TMDB)](https://www.themoviedb.org/).

FLICK allows users to explore movies, search by title, filter by genre, sort results, and view detailed information through an interactive interface.

The project was originally developed as a frontend learning challenge and later modernized to improve its architecture, usability, accessibility, and deployment workflow.

### Live Demo

**[Explore FLICK](https://flick-six-zeta.vercel.app/)**

### Features

- **Movie discovery:** Browse movies retrieved from TMDB.
- **Search:** Find movies by title.
- **Filtering:** Explore movies by genre.
- **Sorting:** Organize movie results using different criteria.
- **Pagination:** Navigate dynamically through available results.
- **Movie details:** View additional information in an interactive modal.
- **Responsive design:** Adapted for desktop, tablet, and mobile devices.
- **Accessibility:** Keyboard interactions, accessible controls, focus management, and reduced-motion considerations.
- **Loading and error states:** Provide feedback during API requests.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, TypeScript, JavaScript |
| Build tool | Vite |
| Styling | CSS3, Bootstrap, React Bootstrap |
| Routing | React Router |
| API | TMDB REST API |
| Backend integration | Vercel Functions |
| Testing | Jest, React Testing Library |
| Code quality | ESLint |
| Version control | Git, GitHub |
| Deployment | Vercel |

## Architecture

FLICK separates its user interface from the server-side integration with TMDB.

```text
User / Browser
      |
      v
React + TypeScript
      |
      | HTTP requests
      v
/api/movies
Vercel Serverless Function
      |
      | Authenticated API requests
      v
TMDB REST API
```

The serverless function handles movie discovery, title searches, and movie details.

This approach keeps the TMDB API credential out of the client-side JavaScript bundle and allows API requests to be validated before they are forwarded to TMDB.

The function is publicly accessible, so server-side credential handling does not replace the need for appropriate usage monitoring and abuse protection.

## Getting Started

### Prerequisites

- Node.js 22
- npm
- A TMDB API key
- Vercel CLI for local serverless function execution

### Installation

Clone the repository:

```bash
git clone https://github.com/RocioLV/FLICK.git
cd FLICK
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create or link a Vercel project:

```bash
npx vercel link
```

Configure the following environment variable in Vercel:

```env
TMDB_API_KEY=your_tmdb_api_key
```

Select the appropriate environments (Development, Preview, and Production) in your Vercel project settings.

Synchronize the development environment:

```bash
npx vercel pull --environment=development
```

Do not commit API credentials or local environment files to the repository.

### Run Locally

Start the application with Vercel's local development environment:

```bash
npx vercel dev
```

Open the local URL provided by the terminal, typically:

```text
http://localhost:3000
```

**Note:** Running `npm run dev` starts Vite alone and does not execute the Vercel API function. Use `vercel dev` to test the complete application locally.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite frontend development server |
| `npm run build` | Run TypeScript checks and build for production |
| `npm run lint` | Check code with ESLint |
| `npm test -- --watch=false` | Run automated tests |
| `npx vercel dev` | Run the frontend with local Vercel Functions |

## Testing

FLICK uses **Jest and React Testing Library** to verify user-facing behavior.

Automated tests currently cover:

- Movie modal rendering and loading states.
- Closing the modal with keyboard and pointer interactions.
- Error handling and focus restoration.
- Pagination boundaries and page navigation.

**11 automated tests passing** at the time of this documentation.

The test suite focuses on important user interactions. Additional integration tests remain a potential improvement.

## Technical Highlights

### API Integration

Movie data is retrieved asynchronously using the Fetch API. Requests use `AbortController` to cancel outdated operations when the user changes search terms, filters, or pages.

### Component-Based Architecture

The interface is divided into reusable React components for movie cards, search, filters, pagination, and the movie details modal.

### State Management

React hooks and Context API manage catalog filters, ordering, pagination, loading states, and selected movie details.

### Accessibility

The interface incorporates semantic elements, keyboard support for modal interactions, visible focus indicators, and focus restoration when the modal closes.

### Server-Side API Access

A Vercel Function handles API requests and reads the TMDB credential from a server-side environment variable instead of exposing it through a `VITE_` variable.

## Future Improvements

- Expand integration and component tests.
- Improve loading states with skeleton placeholders.
- Optimize image loading and performance.
- Improve search-result relevance and filtering.
- Enhance monitoring and server-side request protection.

## Author

**Rocío Lorca Villalobos**

Frontend Developer | React · TypeScript · JavaScript

- [GitHub](https://github.com/RocioLV)
- [LinkedIn](https://www.linkedin.com/in/RocioLV-developer/)

## Acknowledgements

This product uses the TMDB API but is not endorsed or certified by TMDB.

Movie information and poster images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).