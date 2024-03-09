import React, { useState } from "react";
import data from "./data";

function App() {
	const [count, setCount] = useState(0);
	const [paragraph, setParagraph] = useState([]);

	const handlesubmit = (e) => {
		e.preventDefault();
		setParagraph(data);

		let amount = parseInt(count);

		console.log(amount);
	};

	return (
		<section className="section-center">
			<h3>lorem ipsum project setup</h3>
			<form className="lorem-form" onSubmit={handlesubmit}>
				<label htmlFor="amount">paragraph:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				/>
				<button type="submit" className="btn">
					Generate
				</button>
			</form>{" "}
			<article className="lorem-text">
				{data.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;