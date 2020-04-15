import { connect } from "react-redux";
import { AddShareholder } from "../components";
import literals from "../literals";

const mapStateToProps = state => ({
    pageTitle: literals.addShareholder.title,
    messageText: literals.addShareholder.messageBox,
    addShareholderTitle: literals.addShareholder.addShareholderTitle,
    form: literals.addShareholder.form
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddShareholder);
