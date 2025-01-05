# Gemini News Generator 📰✨

Welcome to the Gemini News Generator! This project uses the Gemini API to generate news articles based on selected categories. The backend is built with Node.js and Express, and the frontend is a simple HTML/CSS/JavaScript application.

## Features 🌟

- Generate news articles based on different categories.
- Modern, minimal, and responsive design.
- Easy to deploy on Vercel.

## Getting Started 🚀

### Prerequisites

- Node.js and npm installed on your machine.
- A Gemini API key.

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/gemini-news-generator.git
    cd gemini-news-generator
    ```

2. **Set up the backend**:
    ```sh
    cd backend
    npm install
    ```

3. **Create a `.env` file** in the `backend` directory and add your Gemini API key:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

4. **Start the backend server**:
    ```sh
    npm start
    ```

5. **Open the frontend**:
    Open the `frontend/index.html` file in your web browser.

## Deployment on Vercel 🌐

1. **Install the Vercel CLI**:
    ```sh
    npm install -g vercel
    ```

2. **Log in to Vercel**:
    ```sh
    vercel login
    ```

3. **Deploy the backend**:
    ```sh
    cd backend
    vercel
    ```

4. **Set up environment variables** on Vercel:
    - Go to your project in the Vercel dashboard.
    - Navigate to the "Settings" tab.
    - Under "Environment Variables", add your `GEMINI_API_KEY`.

## Usage 📖

1. **Select a category** from the dropdown menu.
2. **Click the "Get News" button** to generate a news article.
3. **Read the generated news** in the news container.

## Project Structure 📂

```
├── backend/
|   │   ├── package-lock.json
|   │   ├── package.json
|   │   ├── server.js
|   │   ├── vercel.json
|   │   └── .gitignore
└── frontend/
    ├── app.js
    ├── index.html
    └── styles.css
```

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request.

## License 📄

This project is licensed under the MIT License.

## Acknowledgements 🙏

- [Express](https://expressjs.com/)
- [Vercel](https://vercel.com/)
- [Google Generative AI](https://developers.google.com/generative-ai)


Made with ❤️ by [Vivaan Goyal](https://github.com/vivaangoyal29)