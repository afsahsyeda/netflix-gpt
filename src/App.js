import { Provider } from "react-redux";
import Body from "./components/Body";
import reduxStore from "./utils/reduxStore";

function App() {
  return (
    <Provider store={reduxStore}>
      <Body />
    </Provider>
  );
}

export default App;
