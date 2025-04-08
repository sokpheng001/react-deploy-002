import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Home | My React App</title>
        <meta
          name="description"
          content="Welcome to the homepage of My React App."
        />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta name="og:title" content="Welcome to My React App" />
        <meta
          name="og:description"
          content="Explore the best React content here."
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://yourdomain.com/" />
        <meta
          name="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3Z0RTY1Ot7U5GQWr7uwjFX_HMZB85SZ9EA&s"
        />
      </Helmet>
      <main className="flex justify-center h-screen flex-col items-center">
        <p className="text-8xl">Home</p>
      </main>
    </>
  );
}

export default App;
