import React from "react";
import { Wrapper, MessageBox } from "../../elements";
import { Paragraph } from "./styles";
import AddShareholderForm from "./AddShareholderForm";

export default class AddShareholder extends React.Component {
    render() {
        const {
            pageTitle,
            addShareholderTitle,
            messageText = [],
            form
        } = this.props;
        const message = messageText.map((text, i) => (
            <Paragraph key={i}>{text}</Paragraph>
        ));
        console.log(form);
        return (
            <Wrapper>
                <h1>{pageTitle}</h1>
                <MessageBox text={message} />
                <AddShareholderForm
                    title={addShareholderTitle}
                    formText={form}
                />
            </Wrapper>
        );
    }
}
