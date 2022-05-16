import "./App.css";
import { Navbar ,Topbar } from "./components/index";
import Router from "./routes/Router";
import { useUserDetail} from "./context/index"
function App() {
  const {userState} = useUserDetail(); 
  console.log(userState)
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
