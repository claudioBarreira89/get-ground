const actionTypes = {
    ADD_SHAREHOLDER: "ADD_SHAREHOLDER"
};

export const addShareholder = payload => ({
    type: actionTypes.ADD_SHAREHOLDER,
    payload
});
