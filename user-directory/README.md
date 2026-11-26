# User Directory (React + TanStack Query)

A small app that lists users, lets you search them, and shows the posts
written by the user you select.

## Run it

1. npm install
2. npm run dev
3. Open the link shown in the terminal (usually http://localhost:5173)

## Data source

No database is needed. Data comes from the free JSONPlaceholder API:
- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/posts?userId=1

## Project structure

- src/main.jsx                    sets up TanStack Query
- src/api.js                      functions that fetch data
- src/App.jsx                     page layout and shared state
- src/components/SearchBar.jsx    search input
- src/components/UserList.jsx     fetches and lists users
- src/components/UserPosts.jsx    fetches posts for the selected user
- src/styles.css                  styling
