import { connect } from "react-redux";
import { CompanyShares } from "../components";
import literals from "../literals";

const mapStateToProps = state => ({
    shareholders: state.shareholders,
    pageTitle: literals.companyShares.title,
    message: literals.companyShares.messageBox
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyShares);
