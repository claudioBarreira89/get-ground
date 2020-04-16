import { connect } from "react-redux";
import { Header } from "../components";
import literals from "../literals";

const mapStateToProps = () => ({
    homeUrl: literals.generic.homeUrl,
    menu: literals.header.menu,
    buttonText: literals.header.buttonText
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
