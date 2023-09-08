import "./App.css";
import ConditionalRendering from "./ConditionalRendering";

function App() {
    const number = Math.floor(Math.random() * 10);
    return (
        <>
            <ConditionalRendering key="" number={number}/>
        </>
    );
}

export default App;