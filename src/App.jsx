import { createContext, useState } from "react";
import Parent from "./pages/parent";
import LongForm from "./pages/longForm";
import ShortForm from "./pages/shortForm";
import Counter from "./pages/counter";
import "./App.css";

export const COUNTER_CONTEXT = createContext();

function App() {
    const [count, setCount] = useState(0);
    const value = { count, setCount };
    return (
        <COUNTER_CONTEXT.Provider value={value}>
            <div className="App">
                {/* <Parent /> */}
                {/* <ShortForm /> */}
                {/* <Counter /> */}
                <LongForm />
            </div>
        </COUNTER_CONTEXT.Provider>
    );
}

export default App;
