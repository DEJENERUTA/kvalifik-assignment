import React from "react";

function Home({ story }) {
	console.log("story", story);
	return (
		<div>
			<p>{story?.title}</p>
			<p>{story?.url}</p>
			<p>{story?.timestamp}</p>
			<p>{story?.score}</p>
			<p>{story?.id}</p>
		</div>
	);
}

export default Home;
