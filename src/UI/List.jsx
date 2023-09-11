import PropTypes from "prop-types";
List.propTypes = {
  element: PropTypes.element,
};
export default function List({ element }) {
  return <ul className="list-disc grid gap-3 pl-5 text-sm">{element}</ul>;
}
