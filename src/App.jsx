import "./App.css";
import Navbar from "./layout/Navbar";
import Listings from "./pages/Listings";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Listings />
    </div>
  );
}

export default App;
