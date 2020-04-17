import {
    addShareholder,
    updateShareholder,
    changePage,
    setPage
} from "../actions";
import { initialState, reducer } from "../reducer";

describe("store/reducer.js", () => {
    it("Should add shareholder", () => {
        const action = addShareholder({
            firstName: "FirstName",
            lastName: "LastName",
            email: "Email"
        });

        const expectedState = {
            ...initialState,
            shareholders: [
                ...initialState.shareholders,
                {
                    firstName: "FirstName",
                    lastName: "LastName",
                    email: "Email",
                    share: 0,
                    director: false,
                    error: false,
                    id: initialState.ids
                }
            ],
            ids: initialState.ids + 1
        };

        const actualState = reducer(initialState, action);
        expect(actualState).toEqual(expectedState);
    });

    it("Should update shareholder", () => {
        const action = updateShareholder({
            id: 1,
            share: 40
        });

        const defaultState = {
            ...initialState,
            shareholders: [
                {
                    id: 1,
                    firstName: "FirstName",
                    lastName: "LastName",
                    email: "Email",
                    share: 0,
                    director: false,
                    error: false
                },
                {
                    id: 2
                }
            ]
        };

        const expectedState = {
            ...initialState,
            shareholders: [
                {
                    id: 1,
                    firstName: "FirstName",
                    lastName: "LastName",
                    email: "Email",
                    share: 40,
                    director: false,
                    error: false
                },
                {
                    id: 2
                }
            ]
        };

        const actualState = reducer(defaultState, action);
        expect(actualState).toEqual(expectedState);
    });

    it("Should change page", () => {
        let action = changePage(true);

        let expectedState = {
            ...initialState,
            activePage: 1
        };

        let actualState = reducer(initialState, action);
        expect(actualState).toEqual(expectedState);

        action = changePage(false);

        expectedState = {
            ...initialState,
            activePage: 0
        };

        actualState = reducer(initialState, action);
        expect(actualState).toEqual(expectedState);
    });

    it("should set page number", () => {
        const action = setPage(3);
        const expectedState = {
            ...initialState,
            activePage: 3
        };

        const actualState = reducer(initialState, action);
        expect(actualState).toEqual(expectedState);
    });

    it("Should return default", () => {
        const expectedState = { ...initialState };

        const actualState = reducer(initialState, {
            action: undefined,
            payload: undefined
        });
        expect(actualState).toEqual(expectedState);
    });
});
