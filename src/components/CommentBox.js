import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class ComponentBox extends Component {
	state = {
		comment: ""
	};

	handleChange = event => {
		this.setState({ comment: event.target.value });
	};

	handleSubmit = event => {
		const { comment } = this.state;
		event.preventDefault();

		this.props.saveComment(comment);

		this.setState({
			comment: ""
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add Comment</h4>
					<textarea
						value={this.state.comment}
						onChange={this.handleChange}
					/>
					<div>
						<button className="submit-comments">
							Submit Comment
						</button>
					</div>
				</form>
				<button
					className="fetch-comments"
					onClick={this.props.fetchComments}
				>
					Fetch Comments
				</button>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(ComponentBox);
