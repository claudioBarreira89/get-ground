import { connect } from "react-redux";
import { Pages } from "../components";

const mapStateToProps = state => ({
    activePage: state.activePage,
    pages: state.pages
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
