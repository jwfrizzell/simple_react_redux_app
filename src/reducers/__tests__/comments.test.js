import commentsReducer from "reducers/comments.js";
import { SAVE_COMMENT } from "actions/types.js";

it("should handle actions of type SAVE_COMMENT", () => {
	const action = {
		type: SAVE_COMMENT,
		payload: "new comment"
	};

	const newState = commentsReducer([], action);

	expect(newState).toEqual(["new comment"]);
});

it("should handle action with unknown type and return empty array", () => {
	const action = {
		type: "UNKNOWN_TYPE",
		payload: "NOTHING"
	};
	const newState = commentsReducer([], action);
	expect(newState).toEqual([]);
});
