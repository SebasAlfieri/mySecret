import Posting from "./components/Posting"
import { firestore } from "./services/firebase"
import "./App.css"

function App() {
  console.log("Firebase:", firestore)
  return (
    <Posting/>
  );
}

export default App;
