# STAR WARS API Explorer 🚀 (React + Vite + Redux Toolkit + Tailwind CSS)

![Welcome page](src/assets/appOverview1.png)
![Register page](src/assets/appOverview2.png)
![Starships list](src/assets/appOverview3.png)
![starship details](src/assets/appOverview4.png)

A React-based application that retrieves and displays information about Star Wars starships using SWAPI. The project utilizes Redux Toolkit for state management and Tailwind CSS for responsive styling.

## 📋 Table of Contents
1. [Overview](#-overview)
2. [Technologies Used](#-technologies-used)
3. [Features](#-features)
4. [Future Improvements](#-future-improvements)
5. [Next Steps](#-next-steps)
6. [Installation](#-installation)
7. [Usage](#-usage)
8. [Project Structure](#-project-structure)
9. [Contributing](#-contributing)
10. [License](#-license)

## 🛸 Overview
This application serves as a directory for Star Wars starships, allowing users to browse and view detailed information for each ship. It highlights the capabilities of modern web technologies by integrating a public API with Redux-based state management for optimal performance and user experience.

## ⚙️ Technologies Used
- **React**: Component-based UI.
- **React Router** (for routing between different pages)
- **Redux Toolkit**: Efficient state management and API handling.
- **Vite**: Modern development server and bundler.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **SWAPI**: The Star Wars API for starship data.
- **LUCIDE**:
- **MOTION**:
- **Jest** and **React Testing Library** (for testing)

## 🌟 Features
- **Dynamic Starship Directory**: Fetches and displays starships from SWAPI.
- **Detailed Starship View**: Click on a starship for full details.
- **Responsive Design**: Styled with Tailwind CSS for mobile and desktop.
- **State Management**: Uses Redux to manage API calls and caching.
- **Authentication** system with login and registration, using JSON Server Auth or Reqres API.
- **Protected routes** to ensure only authenticated users can access certain pages (like starships details).

## 🛠️ Future Improvements
- **Character and Planet Directories**: Extend functionality to include additional Star Wars data.
- **Enhanced Filtering**: Add more specific filters (e.g., starship class, manufacturer).

## 📈 Next Steps
- **User Authentication**: Allow users to save favorite starships.
- **Dark Mode**: Implement theme switching for a better user experience.
- **Internationalization**: Support for multiple languages.

## 🖥️ Installation
1. Prerequisites:
Node.js and npm (or yarn) installed.
Installation:
2. Clone this repository:
git clone https://github.com/IMMaribel/starwars-starship-directory-redux-toolkit.git
3. Navigate to the project directory:
cd your-repo
4. Install dependencies:
npm install   
5. Running the development server:
npm start

## 🔧 Usage
- Home Page (/): Displays a list of all Star Wars movies. Each movie is clickable, and clicking on a movie will navigate you to the movie's detailed page.
- Movie Details Page (/movies/:id): Displays detailed information about the movie, such as its title, image, and associated characters.
- Starship List (/starships): Displays a list of starships. Each starship links to its own details page.
- Starship Details Page (/starships/:id): Displays detailed information about a specific starship, including pilots, associated movies, and more.
- Login Page (/login): Allows users to log in to the application.
- Register Page (/register): Allows users to register for a new account.
- Protected Routes: If a user is not logged in, they will be redirected to the login page when trying to access protected routes like the starships details page.

## 📂 Project Structure
Here is an overview of the project's key files and directories:

starwars-starship-directory-redux-toolkit/

src/

_tests_/

assets/
    MovieCard.test.js
    PilotCard.test.js
    shipPage.test.js

components/
    Header.jsx
    Layout.jsx
    MovieCard.jsx
    PilotCard.jsx
    ShipCard.jsx

guards/
    ProtectRoute.jsx

hooks/
    horizontalscroll.jsx
    useFetchMovies.jsx
    useFetchPilots.jsx
    useFetchSips.js

lib/
    eslint.config.js

pages/
    loginPage.jsx
    refisterPage.jsx
    shipPage.jsx
    welcomePage.jsx

stores/
    authSlice.js
    movieSlice.js
    pilotSlice.js
    shipSlice.js
    store.js

App.jsx        # Main app component
index.css      # Global styling
main.jsx       # Entry point

## 🤝 Contributing
Contributions are welcome!

- Reporting Issues: Open a GitHub issue to report bugs or suggest improvements.
- Pull Requests: Fork the repository, make your updates, and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

This README now includes an enhanced project description, installation, future enhancements, and licensing information. Feel free to adjust any additional details or features!
