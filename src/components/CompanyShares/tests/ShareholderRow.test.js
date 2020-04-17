import React from "react";
import { shallow } from "enzyme";
import ShareholderRow from "../ShareholderRow";

const handleClick = jest.fn();
const handleChange = jest.fn();
const props = {
    shareholder: {
        id: 2,
        firstName: "Claudio",
        lastName: "Barreira",
        email: "cbarreira@share.com",
        director: true,
        share: 0
    },
    directorInput: ["YES", "NO"],
    first: true,
    handleClick,
    handleChange
};

describe("CompanyShares/ShareholderRow.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<ShareholderRow {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Rendering component", () => {
        it("Should render error message when the summ of all shares is higher than 100", () => {
            component.setProps({
                shareholder: {
                    ...props.shareholder,
                    share: 60,
                    error: true
                }
            });

            expect(component.find("[dataTestId='errorBlock']").length).toEqual(
                1
            );
        });
    });

    describe("Handling events", () => {
        it("Should toggle director status", () => {
            const director = "div[dataTestId='directorText']";
            expect(component.find(director).text()).toEqual("YES");

            component.find(director).simulate("click");

            expect(handleClick).toHaveBeenCalledWith(2, false);

            component.setProps({
                shareholder: {
                    ...props.shareholder,
                    director: false
                }
            });

            expect(component.find(director).text()).toEqual("NO");
        });

        it("Should uptade share value", () => {
            component
                .find("input")
                .simulate("change", { target: { value: "10" } });

            expect(handleChange).toHaveBeenCalledWith("10", 2);
        });
    });
});
