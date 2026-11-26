# User Directory

A simple React application where you can browse a list of users, search for a particular user, and view the posts written by them.

I built this project to practise working with APIs and understand how TanStack Query handles data fetching in React.

## Features

- Displays a list of users.
- Search users by name.
- Select a user to view their posts.
- Fetches user and post data from an API.
- Uses TanStack Query to manage API requests and caching.

## Tech Used

- React
- JavaScript
- TanStack Query
- Vite
- CSS

## Getting Started

Clone the repository and navigate to this project:

```bash
git clone https://github.com/abdularshad080-dev/react_practice.git
cd react_practice/user-directory
```

Install the dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## API

The application uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to fetch user and post data.

- Users: `https://jsonplaceholder.typicode.com/users`
- Posts: `https://jsonplaceholder.typicode.com/posts?userId=1`

No database setup is required.

## Project Structure

```text
src/
├── components/
│   ├── SearchBar.jsx
│   ├── UserList.jsx
│   └── UserPosts.jsx
├── api.js
├── App.jsx
├── main.jsx
└── styles.css
```

## What I Practised

- Fetching data from external APIs.
- Using TanStack Query in a React application.
- Displaying API data through components.
- Searching and selecting users.
- Managing loading and fetched data states.
