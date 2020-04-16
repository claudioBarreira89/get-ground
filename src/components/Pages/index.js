import React from "react";
import { AddShareholder, CompanyShares } from "../../containers";

export default class Pages extends React.Component {
    pagesComponents = {
        addShareholders: AddShareholder,
        companyShares: CompanyShares
    };

    render() {
        const { activePage, pages } = this.props;
        const Page = this.pagesComponents[pages[activePage]];

        return Object.keys(this.pagesComponents).map((page, i) =>
            pages[activePage] === page ? <Page key={i} /> : null
        );
    }
}
