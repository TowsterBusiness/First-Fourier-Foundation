import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <div className="about-us">
        <h1>Who the Frickity Frack are we?</h1>
        <p>
          We are the <strong>First Fourier Foundation</strong>. We strive to
          create interactive visualizations for complicated problems. In
          addition, we want to use the power of technology to create online
          hands on experiences that allow students and learners alike to be able
          to really <u>solve problems intuitively</u> and feel as if you would
          be able to <u>discover concepts yourself.</u>
        </p>
      </div>
      <div className="examples">
        <h1>Our Examples...</h1>

        <div className="project">
          <a
            href="https://towsterbusiness.github.io/periodic/"
            target="_blank"
            className="link"
          >
            <h2>Periodic</h2>
            <p>Displays rotatable organic molecules</p>

            <img
              src="./src/assets/periodic.png"
              alt="periodic app"
              className="project-image"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
