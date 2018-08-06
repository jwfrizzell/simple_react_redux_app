import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox.js";
import Root from "Root.js";

let wrapper;
beforeEach(() => {
	wrapper = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

it("should have text area and two buttons", () => {
	expect(wrapper.find("button").length).toEqual(2);
	expect(wrapper.find("textarea").length).toEqual(1);
});

describe("Text Area Test", () => {
	beforeEach(() => {
		wrapper
			.find("textarea")
			.simulate("change", { target: { value: "Some text" } });

		wrapper.update();
	});

	it("should have a text area that users can type in and return user input value", () => {
		expect(wrapper.find("textarea").prop("value")).toEqual("Some text");
	});

	it("should remove text after being submitted", () => {
		wrapper.find("form").simulate("submit");
		wrapper.update();
		expect(wrapper.find("textarea").prop("value")).toEqual("");
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
