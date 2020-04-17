import React from "react";
import { shallow } from "enzyme";
import Footer from "../";

const changePage = jest.fn();
const props = {
    currentPage: 0,
    homeUrl: "http://new-url.com",
    changePage
};

describe("Footer/index.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<Footer {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Handling events", () => {
        it("Should redirect to the homepage if is first page", () => {
            window.location.assign = jest.fn();

            const buttons = component.find("Button");
            buttons
                .first()
                .props()
                .handleClick();

            expect(window.location.assign).toBeCalledWith(props.homeUrl);
        });

        it("Should go to previous page", () => {
            component.setProps({
                currentPage: 1
            });

            const buttons = component.find("Button");
            buttons
                .first()
                .props()
                .handleClick();

            expect(changePage).toBeCalledWith(false);
        });

        it("Should go to next page", () => {
            component.setProps({
                currentPage: 0
            });

            const buttons = component.find("Button");
            buttons
                .last()
                .props()
                .handleClick();

            expect(changePage).toBeCalledWith(true);
        });
    });
});
