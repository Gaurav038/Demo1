import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  const mystyle = {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontSize: "1.5rem",                                       
  };

  return (
    <div className="App" style={mystyle}>
        <Navbar />
        <Middle />
        <Footer />
    </div>
  );
}

export default App;
