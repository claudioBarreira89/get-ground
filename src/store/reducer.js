import { actionTypes } from "./actions";

export const initialState = {
    activePage: 0,
    pages: ["addShareholders", "companyShares", "extras"],
    shareholders: [],
    ids: 1
};

export const reducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case actionTypes.ADD_SHAREHOLDER: {
            const id = state.ids;

            return {
                ...state,
                shareholders: [
                    ...state.shareholders,
                    {
                        ...payload,
                        share: 0,
                        director: false,
                        error: false,
                        id
                    }
                ],
                ids: state.ids + 1
            };
        }
        case actionTypes.UPDATE_SHAREHOLDER: {
            const total =
                state.shareholders.reduce(
                    (acc, shareholder) =>
                        (acc +=
                            shareholder.id === payload.id
                                ? 0
                                : shareholder.share),
                    0
                ) + payload.share;

            const shareholders = state.shareholders.map(shareholder => {
                if (shareholder.id === payload.id) {
                    return {
                        ...shareholder,
                        ...payload,
                        error: total > 100
                    };
                } else {
                    return total <= 100
                        ? { ...shareholder, error: false }
                        : shareholder;
                }
            });

            return {
                ...state,
                shareholders
            };
        }
        case actionTypes.CHANGE_PAGE: {
            let page;
            if (payload) {
                page = state.activePage + 1;
            } else {
                page = state.activePage - 1;
            }

            return {
                ...state,
                activePage: state.pages[page] ? page : state.activePage
            };
        }
        case actionTypes.SET_PAGE: {
            return {
                ...state,
                activePage: payload
            };
        }
        default:
            return state;
    }
};
