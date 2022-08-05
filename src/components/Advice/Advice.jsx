import "./index.css";
import { useState, useEffect } from "react";

const Advice = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => setAdvice(res?.slip));
  }, [count]);
  console.log(advice.slip);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="advice">
      <h5> ADVICE #{advice?.id}</h5>
      <h5>Says:</h5>
      <p> {advice?.advice} </p>
      <button className="btn" onClick={handleClick}> + </button>
    </div>
  );
};

const Loop =()=> {
	const [count, setCount] = useState(0);
	const [advice, setAdvice] = useState({});

	useEffect(() => {
		fetch(`https://api.adviceslip.com/advice`, { cache: "no-store" })
		  .then((res) => res.json())
		  .then((res) => setAdvice(res?.slip));
	  }, );

	  const handleClick = () => {
		setCount((prev) => prev + 1);
	  };
	  return (
		<div className="advice-loop">
		 <h5>  LOOP ADVICE </h5> <p>{advice?.advice} {handleClick}</p>
		</div>
	  );
	};






export {Advice, Loop};
