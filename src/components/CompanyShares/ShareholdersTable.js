import React from "react";
import ShareholderRow from "./ShareholderRow";
import {
    ShareholdersTableWrapper,
    ShareholdersTableHeader,
    ColumnTitle
} from "./styles";
import { Column } from "../../elements";

export default class ShareholdersTable extends React.Component {
    render() {
        const {
            shareholders,
            handleChange,
            handleClick,
            directorInput,
            labels
        } = this.props;
        return (
            <ShareholdersTableWrapper>
                <ShareholdersTableHeader>
                    <Column flex={1}>{labels.shareholders}</Column>
                    <Column>
                        <ColumnTitle>{labels.shares}</ColumnTitle>
                    </Column>
                    <Column>
                        <ColumnTitle>{labels.director}</ColumnTitle>
                    </Column>
                </ShareholdersTableHeader>
                {shareholders.map((shareholder, i) => (
                    <ShareholderRow
                        key={shareholder.id}
                        shareholder={shareholder}
                        first={i === 0}
                        last={i + 1 === shareholders.length}
                        handleChange={handleChange}
                        handleClick={handleClick}
                        directorInput={directorInput}
                    />
                ))}
            </ShareholdersTableWrapper>
        );
    }
}
