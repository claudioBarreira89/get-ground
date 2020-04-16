import React from "react";
import { Wrapper, MessageBox } from "../../elements";

export default class CompanyShare extends React.Component {
    render() {
        const { pageTitle, message } = this.props;
        return (
            <Wrapper>
                <h1>{pageTitle}</h1>
                <MessageBox text={message} />
            </Wrapper>
        );
    }
}
