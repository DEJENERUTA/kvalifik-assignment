import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addStories } from "./storiesSlice";
import Home from "./components/Home";
const getRandomItems = (items) => {
	const shuffledItems = items.sort(() => 0.5 - Math.random());
	const selected = shuffledItems.slice(0, 10);
	return selected;
};

const App = () => {
	const stories = useSelector((state) => state.stories);
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
			.then((response) => response.json())
			.then((storyIds) => {
				const randomStories = getRandomItems(storyIds);
				const storyFetches = randomStories.map((id) =>
					fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
						(response) => response.json()
					)
				);
				Promise.all(storyFetches).then((stories) => {
					dispatch(addStories(stories));
				});
			});
	}, [dispatch]);
	console.log(stories);

	return (
		<div className="App">
			<Home />
			{stories.map((story) => (
				<div>
					{story.title}
					{story.rul}
					{story.timestamp}
					{story.score}
				</div>
			))}
		</div>
	);
};

export default App;
