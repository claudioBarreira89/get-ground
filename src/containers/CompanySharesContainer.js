import { connect } from "react-redux";
import { CompanyShares } from "../components";
import { updateShareholder, setPage } from "../store/actions";
import literals from "../literals";

const mapStateToProps = state => ({
    shareholders: state.shareholders,
    pageTitle: literals.companyShares.title,
    message: literals.companyShares.messageBox,
    addShareholderButton: literals.companyShares.button,
    labels: literals.companyShares.labels,
    director: literals.companyShares.director
});

const mapDispatchToProps = { updateShareholder, setPage };

export default connect(mapStateToProps, mapDispatchToProps)(CompanyShares);
