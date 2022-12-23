import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import Parent from "./pages/parent";
import ShortForm from "./pages/shortForm";
import "./App.css";

export const COUNTER_CONTEXT = createContext();

function App() {
    const [count, setCount] = useState(0);
    const value = { count, setCount };
    return (
        <COUNTER_CONTEXT.Provider value={value}>
            <div className="App">
                {/* <Parent /> */}
                <ShortForm></ShortForm>
            </div>
        </COUNTER_CONTEXT.Provider>
    );
}

export default App;
