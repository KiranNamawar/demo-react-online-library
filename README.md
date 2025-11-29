# Online Library - React Application

This is a responsive Online Library application built with React, Redux, and Tailwind CSS. It allows users to browse books, view details, and add new books to the collection.

## Features

- **Home Page**: Welcome message, popular categories, and popular books.
- **Browse Books**: Filter books by category and search by title or author.
- **Book Details**: Detailed view of a selected book.
- **Add Book**: Form to add new books to the library (managed via Redux).
- **Responsive Design**: Styled with Tailwind CSS for a seamless experience on all devices.
- **Dark Mode**: Modern dark theme with glassmorphism effects.

## Tech Stack

- **React**: UI Library
- **Redux Toolkit**: State Management
- **React Router**: Routing
- **Tailwind CSS**: Styling
- **Vite**: Build Tool

## Getting Started

Follow these instructions to run the application locally.

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/KiranNamawar/demo-react-online-library.git
   ```

2. Navigate to the project directory:
   ```bash
   cd demo-react-online-library
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in the terminal).

## Project Structure

- `src/components`: Reusable UI components (Header, Footer, BookCard).
- `src/redux`: Redux store and slices.
- `src/routes`: Page components (Home, Browse, BookDetail, NewBook).
- `src/types`: TypeScript interfaces.
