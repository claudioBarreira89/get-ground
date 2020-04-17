import React from "react";
import { shallow } from "enzyme";
import AddShareholderForm from "../AddShareholderForm";

const props = {
    formText: {
        firstName: "Firstname",
        lastName: "Lastname",
        email: "Email",
        button: {
            add: "Add",
            update: "Update"
        }
    }
};

describe("AddShareholder/AddShareholderForm.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<AddShareholderForm {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Mounting component", () => {
        it("Should update component state with props", () => {
            const shareholder = {
                id: 1,
                firstName: "Claudio",
                lastName: "Barreira",
                email: "cb@share.com"
            };

            const component = shallow(
                <AddShareholderForm {...props} shareholder={shareholder} />
            );

            expect(component.instance().state).toEqual(shareholder);
        });
    });

    describe("Handling events", () => {
        it("Should handle input value change", () => {
            const inputFirstName = component.find(
                "InputField[label='Firstname']"
            );
            const inputLastName = component.find(
                "InputField[label='Lastname']"
            );
            const inputEmailName = component.find("InputField[label='Email']");

            inputFirstName
                .props()
                .handleChange({ target: { value: "John" } }, "firstName");

            inputLastName
                .props()
                .handleChange({ target: { value: "Doe" } }, "lastName");

            inputEmailName
                .props()
                .handleChange(
                    { target: { value: "john.doe@share.com" } },
                    "email"
                );

            expect(component.instance().state).toEqual({
                id: null,
                firstName: "John",
                lastName: "Doe",
                email: "john.doe@share.com"
            });
        });

        it("Should submit input values to create new shareholder", () => {
            const addShareholder = jest.fn();
            component.setProps({
                addShareholder
            });

            const button = component.find("Button");
            button.props().handleClick();

            expect(addShareholder).toHaveBeenCalled();
        });

        it("Should update existing shareholder", () => {
            const updateShareholder = jest.fn();

            component.setProps({
                addShareholder: null,
                updateShareholder
            });

            const button = component.find("Button");
            button.props().handleClick();

            expect(updateShareholder).toHaveBeenCalled();
        });
    });
});
