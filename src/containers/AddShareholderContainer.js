import { connect } from "react-redux";
import { AddShareholder } from "../components";
import { addShareholder, updateShareholder } from "../store/actions";
import literals from "../literals";

const mapStateToProps = state => ({
    pageTitle: literals.addShareholder.title,
    messageText: literals.addShareholder.messageBox,
    addShareholderTitle: literals.addShareholder.addShareholderTitle,
    shareholderTitle: literals.addShareholder.shareholderTitle,
    form: literals.addShareholder.form,
    shareholders: state.shareholders
});

const mapDispatchToProps = {
    addShareholder,
    updateShareholder
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShareholder);
