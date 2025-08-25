import App from "./components/App";
import { Clock } from "./components/Clock";
import RandomizeWords from "./components/RandomizeWords";
import TitleSyncCounter from "./components/TitleSyncCounter";

const ReactPractice = () => {
  return (
    <div>
      <App />
      <hr />
      <RandomizeWords />
      <hr />
      <Clock />
      <hr />
      <TitleSyncCounter />
    </div>
  );
};

export default ReactPractice;
