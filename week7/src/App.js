import "./App.css";
import HookControlledButtonState from "./Counter";
import EmojeeCounter from "./EmojeeCounters";

function App() {
  return (
    <div className="App">
      <HookControlledButtonState />
      <EmojeeCounter pic="Love" />
      <EmojeeCounter pic="Sad" />
      <EmojeeCounter pic="Like" />
    </div>
  );
}

export default App;
