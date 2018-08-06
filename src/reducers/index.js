import { combineReducers } from "redux";
import commentsReducers from "reducers/comments.js";

export default combineReducers({
	comments: commentsReducers
});
