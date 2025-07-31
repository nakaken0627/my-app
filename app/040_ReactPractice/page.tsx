import App from "./components/App";
import { Clock } from "./components/Clock";
import RandomizeWords from "./components/RandomizeWords";

const ReactPractice = () => {
  return (
    <div>
      <App />
      <hr />
      <RandomizeWords />
      <hr />
      <Clock />
    </div>
  );
};

export default ReactPractice;
