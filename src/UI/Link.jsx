import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Link as LinkTo } from "react-scroll";
Links.propTypes={
  children:PropTypes.element,
  to:PropTypes.string,
}
export default function Links({ children, to }) {
  return <Link to={to} > <LinkTo to="header"  smooth={true} offset={-20} duration={700}>{children}</LinkTo> </Link>;
}