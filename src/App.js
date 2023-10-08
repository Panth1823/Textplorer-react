import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="container flex flex-col justify-center items-center m-auto">
                    <Form />
                </div>
            </div>
        </>
    );
}

export default App;
