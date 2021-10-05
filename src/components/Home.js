import { useEffect, useState } from "react";

function Home({ story }) {
	const [karma, setKarma] = useState("");
	useEffect(() => {
		fetch(`https://hacker-news.firebaseio.com/v0/user/${story?.by}.json`)
			.then((response) => response.json())
			.then((result) => {
				setKarma(result.karma);
			});
	}, []);
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
				<span>Author karma score: {karma}</span>
			</p>
		</div>
	);
}

export default Home;
