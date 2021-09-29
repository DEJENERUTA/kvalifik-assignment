import React from "react";
export class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<p>Story Title{this.props.title}</p>
				<p>Story url{this.props.url}</p>
				<p>Story timestamp{this.props.timestamp}</p>
				<p>Story score{this.props.score}</p>
				<p>authorids{this.props.authorids}</p>
			</div>
		);
	}
}
export default Home;
