export const actionTypes = {
    ADD_SHAREHOLDER: "ADD_SHAREHOLDER",
    UPDATE_SHAREHOLDER: "UPDATE_SHAREHOLDER",
    CHANGE_PAGE: "CHANGE_PAGE"
};

export const addShareholder = payload => ({
    type: actionTypes.ADD_SHAREHOLDER,
    payload
});

export const updateShareholder = payload => ({
    type: actionTypes.UPDATE_SHAREHOLDER,
    payload
});

export const changePage = payload => ({
    type: actionTypes.CHANGE_PAGE,
    payload
});
