import React from "react";
import { shallow } from "enzyme";
import CompanyShares from "../";

const updateShareholder = jest.fn();
const setPage = jest.fn();
const props = {
    updateShareholder,
    setPage
};

describe("CompanyShares/index.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<CompanyShares {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Handling events", () => {
        it("Should change shareholder share percentage", () => {
            component
                .find("ShareholdersTable")
                .props()
                .handleChange("1000", 1);

            expect(updateShareholder).not.toHaveBeenCalled();

            component
                .find("ShareholdersTable")
                .props()
                .handleChange("10", 1);

            expect(updateShareholder).toHaveBeenCalledWith({
                id: 1,
                share: 10
            });

            component
                .find("ShareholdersTable")
                .props()
                .handleChange("", 2);

            expect(updateShareholder).toHaveBeenCalledWith({
                id: 2,
                share: 0
            });
        });

        it("Should update director status", () => {
            const updateShareholder = jest.fn();

            component.setProps({
                updateShareholder
            });
            component
                .find("ShareholdersTable")
                .props()
                .handleClick(2, false);

            expect(updateShareholder).toHaveBeenCalledWith({
                id: 2,
                director: false
            });
        });

        it("Should return to first page", () => {
            component
                .find("Button")
                .props()
                .handleClick();

            expect(setPage).toHaveBeenCalledWith(0);
        });
    });
});
