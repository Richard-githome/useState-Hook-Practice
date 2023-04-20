import React, { useState } from "react";

function App(props) {
  setInterval(UpdateTime, 1000);
  const [time, getTime] = useState(props.now);

  function UpdateTime() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </div>
  );
}

export default App;
