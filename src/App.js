import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Form heading="Enter Text to Convert 👇" />
      </div>
    </>
  );
}

export default App;
