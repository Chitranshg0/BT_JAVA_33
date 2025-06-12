import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);

  return (
    <>
      {[1, 2, 3, 4, 5].map((ele, idx) => (
        <button
          key={idx}
          onClick={() => setActive(idx)}
          style={{ backgroundColor: active === idx ? 'red' : 'white' }}
        >
          {ele}
        </button>
      ))}
    </>
  );
}

export default App;
