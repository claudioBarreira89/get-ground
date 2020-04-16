import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyles, { Content } from "./styles";
import { Header, Pages, Footer } from "./containers";

export default () => (
    <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Content>
            <Pages />
        </Content>
        <Footer />
    </Provider>
);
