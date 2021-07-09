import React, { Component } from "react";
import ReactDOM from "react-dom";
import style from "./index.css";

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state =
		{}
	}

	render() {
		return (
			<div className={style.pageCont}>
			</div>
		)
	}
}

ReactDOM.render(<PageOne/>, document.getElementById('pageOne'));