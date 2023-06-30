import { useState } from "react";
function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <p> {index} </p>
      <button onClick={() => setIndex(index + 1)}>+</button>
      <button onClick={() => setIndex(index - 1)}>-</button>
    </>
  );
}

export default App;
