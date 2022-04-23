import "./App.css";
import { Navbar ,Topbar } from "./components/index";
import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
