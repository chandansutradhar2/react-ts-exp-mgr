import React from "react";

export class StateClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	componentDidMount() {}

	incrementCounter = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	decrementCounter = () => {
		this.setState({
			counter: this.state.counter - 1,
		});
	};

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<p>State Class Component</p>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div>
						<button onClick={this.incrementCounter}>+</button>
					</div>
					<div style={{ padding: "5px", fontSize: "20px" }}>
						{this.state.counter}
					</div>
					<div>
						<button onClick={this.decrementCounter}>-</button>
					</div>
				</div>
			</div>
		);
	}
}
