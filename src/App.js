import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  // let counter = 100;
  let [counter, setCounter] = useState(100);
  let [displayImage, setDisplayImage] = useState(
    "https://picsum.photos/id/237/300/300"
  );

  let likeMe = () => {
    counter = counter + 1;

    // PERFORM DOM OPERATION
    setCounter(counter);
  };

  let changeImage = () => {
    displayImage = "https://picsum.photos/id/238/300/300";
    // perform dom operation
    setDisplayImage(displayImage);
  };

  let resetImage = () => {
    displayImage = "https://picsum.photos/id/237/300/300";
    // perform dom operation
    setDisplayImage(displayImage);
  };

  return (
    <div>
      <img src={displayImage} />
      <h1>Like {counter}</h1>

      <input type="button" value="Like Me" onClick={likeMe} />
      <br />
      <input type="button" value="Chnage Image" onClick={changeImage} />
      <input type="button" value="Reset Image" onClick={resetImage} />
    </div>
  );
}

export default App;
