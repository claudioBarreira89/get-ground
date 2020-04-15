import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyles from "./styles";
import Header from "./containers/HeaderContainer";

export default () => (
    <Provider store={store}>
        <GlobalStyles />
        <Header />
    </Provider>
);
