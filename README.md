# SleekChat Frontend

A modern, responsive chat application built with React and Redux, featuring real-time messaging capabilities using Socket.IO.

## Features

- Real-time messaging using Socket.IO
- Responsive design that works on both desktop and mobile devices
- Emoji support for messages
- Smooth animations using Framer Motion
- Redux state management
- React Router for navigation
- Device detection for optimized user experience

## Tech Stack

- React 17
- Redux for state management
- Socket.IO Client for real-time communication
- React Router for navigation
- Framer Motion for animations
- React Emoji for emoji support
- React Device Detect for device detection

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd SleekChat_Frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Project Structure

```
src/
├── components/     # React components
├── icons/         # Icon assets
├── store/         # Redux store configuration
├── App.js         # Main application component
├── App.css        # Main application styles
└── index.js       # Application entry point
```

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration for deployment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
