import "./App.css";
import FacebookEmojiCounter from "./Facebookemoji";
import ToggleMode from "./ToggleMode";

function App() {
  return (
    <div className="App">
      <FacebookEmojiCounter type="Love" />
      <FacebookEmojiCounter type="Like" />
      <ToggleMode />
    </div>
  );
}

export default App;
