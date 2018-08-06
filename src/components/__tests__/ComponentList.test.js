import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList.js";
import Root from "Root.js";
import reducers from "reducers";
import { createStore } from "redux";

let wrapper;

beforeEach(() => {
	const initialState = {
		comments: ["comment 1", "comment 2"]
	};

	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it("should create <li> per comment", () => {
	expect(wrapper.find("li").length).toEqual(2);
});

it("should find text for each comment", () => {
	expect(wrapper.render().text()).toContain("comment 1");
	expect(wrapper.render().text()).toContain("comment 2");
});
