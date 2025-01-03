import "./App.css";
import GreetingElement from "./mygreetingapp.js";
import GreetingElementwithProp from "./myGreetingProp.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingElement />
        <GreetingElementwithProp msg="Hello Lets start learning function Component... with props" />
        <GreetingElementwithProp msg="Sunday" />
        <GreetingElementwithProp msg="Monday" />
        <GreetingElementwithProp msg="Tuesday" />
        <GreetingElementwithProp msg="Wednesday" />
        <GreetingElementwithProp msg="Thursday" />
        <GreetingElementwithProp msg="Friday" />
        <GreetingElementwithProp msg="Saturday" />
      </header>
    </div>
  );
}

export default App;
