export const actionTypes = {
    ADD_SHAREHOLDER: "ADD_SHAREHOLDER",
    UPDATE_SHAREHOLDER: "UPDATE_SHAREHOLDER"
};

export const addShareholder = payload => ({
    type: actionTypes.ADD_SHAREHOLDER,
    payload
});

export const updateShareholder = payload => ({
    type: actionTypes.UPDATE_SHAREHOLDER,
    payload
});
