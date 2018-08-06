import { SAVE_COMMENT } from "actions/types.js";
import { saveComment } from "actions";

describe("saveComment", () => {
	it("should have the correct type", () => {
		const action = saveComment();
		expect(action.type).toEqual(SAVE_COMMENT);
	});

	it("should have the correct payload", () => {
		const action = saveComment("some comment");
		expect(action.payload).toEqual("some comment");
	});
});
