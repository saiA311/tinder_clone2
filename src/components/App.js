import "./App.css";
import Header from "./header";
import TinderCards from "./TinderCard";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build the Tinder clone with MERN</h1> */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
