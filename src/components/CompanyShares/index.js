import React from "react";
import { Wrapper, MessageBox, Column, Button } from "../../elements";
import ShareholdersTable from "./ShareholdersTable";

export default class CompanyShare extends React.Component {
    handleChange = (value, id) => {
        const { updateShareholder } = this.props;
        let share = parseInt(value);

        if (value.length > 3) return;

        updateShareholder({ id, share: share || 0 });
    };

    handleClick = (id, value) =>
        this.props.updateShareholder({ id, director: value });

    render() {
        const {
            pageTitle,
            message,
            addShareholderButton,
            shareholders,
            director,
            labels,
            setPage,
            errorMessage
        } = this.props;

        return (
            <>
                <Wrapper>
                    <h1>{pageTitle}</h1>
                    <MessageBox text={message} />

                    <ShareholdersTable
                        labels={labels}
                        directorInput={director}
                        errorMessage={errorMessage}
                        shareholders={shareholders}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                    />

                    <Column textAlign={"center"}>
                        <Button
                            plus
                            large
                            text={addShareholderButton}
                            handleClick={() => setPage(0)}
                        />
                    </Column>
                </Wrapper>
            </>
        );
    }
}
