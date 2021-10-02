import React from "react";

function Home({ story }) {
	console.log("story", story);

	return (
		<div className="homePage">
			<h1>Hacker News top stories</h1>
			<p>
				{" "}
				<span>Title:</span> {story?.title}
			</p>
			<p>
				<span>Url:</span> {story?.url}
			</p>
			<p>
				<span>Timestamp:</span> {story?.kids}
			</p>
			<p>
				<span>score:</span> {story?.score}
			</p>
			<p>
				<span>id:</span> {story?.id}
			</p>
			<p>
				<span>Author karma score: {story?.by}</span>
			</p>
		</div>
	);
}

export default Home;
