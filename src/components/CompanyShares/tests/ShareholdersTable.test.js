import React from "react";
import { shallow } from "enzyme";
import ShareholdersTable from "../ShareholdersTable";

const props = {
    labels: {
        shareholders: "Shareholders",
        shares: "Shares",
        director: "Director"
    },
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

describe("CompanyShares/ShareholdersTable.js", () => {
    let component;
    beforeAll(() => {
        component = shallow(<ShareholdersTable {...props} />);
    });

    it("Should exist", () => {
        expect(component).not.toBeNull();
    });

    describe("Rendering component", () => {
        it("Should render shareholders", () => {
            expect(component.find("ShareholderRow").length).toEqual(3);
        });
    });
});
