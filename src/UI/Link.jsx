import { Link } from "react-router-dom";
import PropTypes from "prop-types"
Links.propTypes={
  children:PropTypes.element,
  to:PropTypes.string,
}
export default function Links({ children, to }) {
  return <Link to={to} > {children} </Link>;
}