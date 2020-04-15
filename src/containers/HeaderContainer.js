import { connect } from "react-redux";
import Header from "../components/Header";
import literals from "../literals";

const mapStateToProps = state => ({
    homeUrl: literals.header.homeUrl,
    menu: literals.header.menu,
    buttonText: literals.header.buttonText
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
