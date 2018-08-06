import React from "react";
import { mount } from "enzyme";
import Root from "Root.js";
import App from "components/App.js";
import moxios from "moxios";

beforeEach(() => {
	moxios.install();
	moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
		status: 200,
		response: [
			{
				name: "comment 1"
			},
			{
				name: "comment 2"
			}
		]
	});
});

it("should be able to fetch comments and display them", async () => {
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	wrapper.find(".fetch-comments").simulate("click");
	const li = await new Promise(resolve => {
		setTimeout(() => {
			let liLength = 0;
			wrapper.update();
			liLength = wrapper.find("li").length;
			wrapper.unmount();
			resolve(liLength);
		}, 300);
	});
	expect(li).toEqual(2);
});

afterEach(() => {
	moxios.uninstall();
});
