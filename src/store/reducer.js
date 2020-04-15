import { actionTypes } from "./actions";

export const initialState = {
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
                        id
                    }
                ],
                ids: state.ids + 1
            };
        }
        case actionTypes.UPDATE_SHAREHOLDER: {
            const shareholders = state.shareholders.map(shareholder => {
                if (shareholder.id === payload.id) {
                    return payload;
                } else {
                    return shareholder;
                }
            });

            return {
                ...state,
                shareholders
            };
        }
        default:
            return state;
    }
};
