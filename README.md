# 🎬 IMDB Clone – Movie Explorer App

A clean and modern IMDB-inspired movie browsing application that allows users to explore trending movies, paginate through pages, filter by genre, sort ratings, and manage a personal watchlist — all built using React, Redux, and TMDb API.

## 🚀 Features

🎞 Trending Movies Banner – Highlighted banner from top trending movies.

📄 Pagination – Navigate through multiple pages of movie listings.

🧾 Movie Cards – Hover-based cards with poster and title. Click to add/remove from Watchlist.

😍 Watchlist – Add/remove movies with persistent local state via Context API.

🎯 Category Filtering – Genre-based filtering in Watchlist using genre_ids.

⏫ Sort Ratings – Sort movies by rating in ascending/descending order.

🔍 Search – Live search on the Watchlist page.

🔗 Route-Based Navigation – Implemented using React Router.

## 🧱 Tech Stack
Framework: React 18+

State Management: Redux Toolkit (Pagination, Movies), Context API (Watchlist)

API: TMDb API

Styling: Tailwind CSS

Routing: React Router DOM

Icons: Font Awesome

## 🧭 Pages & Routes
`/Home` – Trending Banner + Paginated Movies

`/watchlist`	Watchlist – Add/remove, filter, sort, search

## 📦 Project Structure
```
/src
│
├── components/
│   ├── Banner.jsx           # Top banner from trending movie
│   ├── MovieCard.jsx        # Poster with title and watchlist emoji
│   ├── Movies.jsx           # Paginated movie grid
│   ├── Pagination.jsx       # Prev/Next page controls
│   └── Navbar.jsx           # Navigation header
│
├── pages/
│   ├── Home.jsx             # Home page (Banner + Movies)
│   └── WatchList.jsx        # Watchlist management
│
├── context/
│   └── watchListContext.js  # Watchlist context and provider
│
├── redux/
│   ├── paginationSlice.js   # Redux slice for pagination state
│   ├── movieSlice.js        # Movies state (loading, error, movies[])
│   └── store.js             # Redux store setup
│
└── utils/                   # Genre mapping, helpers

```

## ⚙️ Installation & Usage

1. Clone the repo : `git clone https://github.com/your-username/imdb-clone.git`
2. cd imdb-clone
3. Install dependencies: `npm install`
4. Run development server: `npm run dev`

## 🙏 Acknowledgements
- TMDb API
- Font Awesome Icons
- Inspired by IMDB
