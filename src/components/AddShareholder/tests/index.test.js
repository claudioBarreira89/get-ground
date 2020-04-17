import React from "react";
import { shallow } from "enzyme";
import AddShareholder from "../";

const props = {
    shareholders: [
        {
            id: 10,
            firstName: "Claudio",
            lastName: "Barreira",
            email: "claudio.barreira@shares.com",
            share: 0,
            director: true,
            error: false
        },
        {
            id: 11,
            firstName: "Claudio",
            lastName: "Barreira",
            email: "claudio.barreira@shares.com",
            share: 0,
            director: false,
            error: false
        },
        {
            id: 12,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@shares.com",
            share: 0,
            director: false,
            error: false
        }
    ]
};

describe("AddShareholder/index.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<AddShareholder {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Rendering component", () => {
        it("Should render Shareholders component", () => {
            expect(component.find("AddShareholderForm").length).toEqual(4);
        });

        it("Should render text", () => {
            component.setProps({
                pageTitle: "Page Title",
                messageText: ["Paragraph 1", "Paragraph 2"]
            });

            expect(component.find("h1").text()).toEqual("Page Title");
        });
    });
});
