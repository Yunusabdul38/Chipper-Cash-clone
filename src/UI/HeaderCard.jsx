import PropTypes from "prop-types";
HeaderCard.propTypes = {
  children: PropTypes.array,
};
export default function HeaderCard({ children }) {
  return (
    <header className="bg-[#202654] px-5 py-5 xl:px-24 md:px-10 text-[#fff] pt-10">{children}</header>
  );
}
