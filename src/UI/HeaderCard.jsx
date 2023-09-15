import PropTypes from "prop-types";
HeaderCard.propTypes = {
  children: PropTypes.node,
};
export default function HeaderCard({ children }) {
  return (
    <header className="z-50 bg-[#202654] text-[#fff] pt-10">{children}</header>
  );
}
