import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Blog heading="Sober jonno JavaScript" author="Anom Bojlor Rahman"></Blog>
      <Blog heading="React bangla" author="Subin Rahman"></Blog>
      <Blog heading="HTML and CSS" author="Balagurusamy"></Blog>
      <Article></Article>
      <Article></Article>
    </div>
  );
}

function Mobile() {

  const [batterydown, setBatteryDown] = useState(100);
  let [isDisable, setIsDisable] = useState(false);

  const handaleBatteryDown = () => {

    const newBaterryDown = batterydown - 10;
    if (newBaterryDown === 0) {
      setIsDisable(true);
    }
    setBatteryDown(newBaterryDown);
  }
  return (
    <div>
      <h1>Mobile Battey: {batterydown}% charge</h1>
      <button disabled={isDisable} onClick={handaleBatteryDown}>battery down</button>
    </div>
  );
}



function Blog(props) {
  return (
    <div className="blog">
      <h1>{props.heading}</h1>
      <h3>Author: {props.author}</h3>
    </div>
  );
}

function Article() {
  const myarticle = {
    color: "white",
    fontSize: "20px",
    backgroundColor: "rgb(42, 156, 221)",
    width: "15%",
    margin: "auto",
    padding: "10px",
    borderRadius: "15px"
  }
  return (
    <div>
      <article className="blog">
        <h1>This is my Blog</h1>
        <h2 style={myarticle}>Author: Loream Kahna</h2>
        <p style={{
          fontWeight: 500,
          textAlign: 'justify',
          margin: "10px",
          padding: "10px",
          color: "rgb(81, 81, 81)",
        }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quos est cupiditate nostrum! Sapiente error at architecto, molestiae facilis cupiditate fugiat laborum repellendus autem nulla corrupti ex impedit, non facere alias. Iure nostrum sit dolores ad aspernatur asperiores. Hic nostrum illo voluptatem ea omnis? Modi excepturi recusandae sint aspernatur aliquam dignissimos architecto asperiores delectus debitis nihil repellat accusantium adipisci non repellendus cupiditate sequi, voluptatibus officiis sit eveniet deleniti assumenda! Itaque ipsam, vero quis consequatur eius illo. Officia at distinctio sint delectus, accusamus atque doloribus optio neque nemo fugiat id minima excepturi quae incidunt vel accusantium obcaecati possimus quia enim? Temporibus.</p>
      </article>

    </div>
  );
}


export default App;
