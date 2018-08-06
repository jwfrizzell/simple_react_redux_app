import React from "react";
import App from "components/App.js";
import { shallow } from "enzyme";
import CommmentBox from "components/CommentBox.js";
import ComponentList from "components/CommentList";

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

it("should show a comment box", () => {
	expect(wrapped.find(CommmentBox).length).toEqual(1);
});

it("should show a comment list", () => {
	expect(wrapped.find(ComponentList).length).toEqual(1);
});
