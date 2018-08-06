import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types.js";
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
