This project is a dynamic web application that provides real-time cryptocurrency price data using the CoinGecko API. It is built with React.js and leverages modern technologies to ensure a seamless and efficient user experience.

## Features

- **Real-Time Cryptocurrency Prices**: Fetches and displays live cryptocurrency prices using the CoinGecko API.
- **Lazy Loading and Suspense**: Optimized performance by loading components and data only when needed.
- **Pagination**: Allows users to browse through large datasets in smaller, manageable chunks.
- **Virtualized Lists**: Efficient rendering of only visible items in the list, reducing DOM size and enhancing performance.
- **Caching**: Implemented with React Query to minimize redundant API calls and ensure faster data retrieval.

## Technologies Used

- **React.js**: For building the user interface.
- **React Query**: For efficient data fetching, caching, and synchronization.
- **Context API**: For state management and smooth data flow across components.
- **Tailwind CSS**: For styling and responsive design.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Sourabh-km13/CoinChase.git
   ```
2. Navigate to the project directory:
   ```bash
   cd coinchase
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## How to Use

1. Open the application in your browser at `http://localhost:3000` (default).
2. Browse through the list of cryptocurrencies.
3. Use pagination controls to navigate through the dataset.

## API Integration

This application integrates with the [CoinGecko API](https://www.coingecko.com/en/api) to fetch real-time cryptocurrency data. Make sure to adhere to their usage policies when deploying the application.

## Performance Optimization

- **Lazy Loading**: Ensures components are loaded only when needed, improving initial load time.
- **Virtualized Lists**: Reduces the number of DOM elements rendered at any given time, making the app performant for large datasets.
- **Caching**: Utilizes React Query's caching capabilities to minimize API calls and enhance data retrieval speed.

## Future Enhancements

- Add a search bar to filter cryptocurrencies by name.
---
![Screenshot 2024-12-31 143057](https://github.com/user-attachments/assets/3e21d41d-a080-4e9b-a55b-9c5bd3ae3013)

![Screenshot 2024-12-31 143118](https://github.com/user-attachments/assets/5828e10e-3900-4df6-8d27-6f2d28b39ea9)
