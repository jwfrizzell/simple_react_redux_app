import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types.js";
import axios from "axios";

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
}

export async function fetchComments() {
	const response = await axios.get(
		"http://jsonplaceholder.typicode.com/comments"
	);
	const names = response.data.map(comment => comment.name);
	return {
		type: FETCH_COMMENTS,
		payload: names
	};
}

export function changeAuth(isLoggedIn) {
	return {
		type: CHANGE_AUTH,
		payload: isLoggedIn
	};
}
