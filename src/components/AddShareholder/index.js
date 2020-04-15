import React from "react";
import { Wrapper, MessageBox } from "../../elements";
import { Paragraph, Hr } from "./styles";
import AddShareholderForm from "./AddShareholderForm";

export default class AddShareholder extends React.Component {
    render() {
        const {
            pageTitle,
            addShareholderTitle,
            shareholderTitle,
            messageText = [],
            form,
            addShareholder,
            updateShareholder,
            shareholders
        } = this.props;
        const message = messageText.map((text, i) => (
            <Paragraph key={i}>{text}</Paragraph>
        ));

        return (
            <Wrapper>
                <h1>{pageTitle}</h1>
                <MessageBox text={message} />

                {shareholders.length < 8 && (
                    <AddShareholderForm
                        formText={form}
                        title={addShareholderTitle}
                        addShareholder={addShareholder}
                    />
                )}
                {shareholders.length > 0 && <Hr />}
                {shareholders.map((shareholder, i) => (
                    <AddShareholderForm
                        key={i}
                        id={shareholder.id}
                        formText={form}
                        title={shareholderTitle}
                        shareholder={shareholder}
                        updateShareholder={updateShareholder}
                    />
                ))}
            </Wrapper>
        );
    }
}
