import React from "react";

function Home() {
	let data = ["title", "url", "timestamp", "score", "authorids"];

	return (
		<div>
			<h1>Hello there!</h1>
			{<p>{data}</p>}
			<p>{data.title}</p>
			<p>{data.url}</p>
			<p>{data.timestamp}</p>
			<p>{data.score}</p>
			<p>{data.authorids}</p>
		</div>
	);
}

export default Home;
