import { useEffect, useState } from "react";
import "./App.css";

function PageLoad() {
  useEffect(() => {
    console.log(`🚀 PageLoad mounted at ${new Date().toLocaleTimeString()}`);

  }, []);

  return <h3 className="page-title">Page Load</h3>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <p className="counter-text">Count: {count}</p>

      <button
        className="btn increase"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>

      <button
        className="btn reset"
        onClick={() => {
          console.log("Counter di-reset oleh user");
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}



function CountWatcher() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      console.log("Count updated");
    }
  }, [count]);

  return (
    <div className="counter-box">
      <p className="counter-text">Count: {count}</p>

      <p>Watcher Count: {count}</p>
      <button className="btn increase"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increase
      </button>

      <button  className="btn reset"
        onClick={() => {
          console.log("Counter di-reset oleh user");
          setCount(0);
        }}
        >
        Reset
      </button>
    </div>
  );
}



export default function App() {
  return (
    <>
      <PageLoad />
      <Counter />
      <CountWatcher />
      <Footer />
    </>
  );
}
