import { connect } from "react-redux";
import { Footer } from "../components";
import { changePage } from "../store/actions";
import literals from "../literals";

const mapStateToProps = state => ({
    homeUrl: literals.generic.homeUrl,
    next: literals.footer.next,
    back: literals.footer.back,
    currentPage: state.activePage
});

const mapDispatchToProps = {
    changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
