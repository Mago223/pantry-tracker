# Pantry Tracker

Pantry Tracker is a web application designed to help you keep track of your pantry items and get AI recipe suggestions based on the items you have. This application leverages Firebase for backend services and the OpenAI API for recipe suggestions.

## Features

- Track pantry items with ease.
- Add, update, and remove items from your pantry.
- Get AI recipe suggestions based on the items available in your pantry.
- Search functionality to quickly find pantry items.
- Intuitive and user-friendly interface.

## Demo

Check out the live version of the application [here](https://pantry-tracker-beta-one.vercel.app/).

## Getting Started

To run the project on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account and a project set up to get your `NEXT_PUBLIC_FIREBASE_API_KEY`.
- OpenAI account to get your `NEXT_PUBLIC_OPENAI_API_KEY`.

## Technologies Used

Pantry Tracker is built using modern web technologies:

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Firebase**: A comprehensive app development platform that provides backend services like authentication and real-time database.
- **Material-UI (MUI)**: A popular React UI framework that implements Google's Material Design.
- **OpenAI API**: Utilized for generating AI-powered recipe suggestions based on pantry items.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mago223/pantry-tracker.git
   cd pantry-tracker

   ```

2. Install the dependencies:

```sh
npm install

```

3. Create a .env file and add your environment variables:

```sh
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key

```

4. Run the development server:

```sh
npm run dev

```

5. Open your browser and navigate to http://localhost:3000 to see the application running.
