import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Vite + React</title>
        <meta name="description" content="" />

        <meta
          property="og:url"
          content="https://react-sigma-murex.vercel.app/"
        />
        <meta property="og:title" content="Vite + React" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary_large_image/" />
        <meta
          property="twitter:domain"
          content="react-sigma-murex.vercel.app"
        />
        <meta
          property="twitter:url"
          content="https://react-sigma-murex.vercel.app/"
        />
        <meta name="twitter:title" content="Vite + React" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://travis.media/images/2019/12/change-the-open-graph-image-size.jpg"
        />
      </Helmet>
      <main className="flex justify-center h-screen flex-col items-center">
        <p className="text-8xl">Home</p>
      </main>
    </>
  );
}

export default App;
