import PropTypes from "prop-types";
SectionCard.propTypes = {
  children: PropTypes.array,
  css:PropTypes.string
};
export default function SectionCard({children,css}) {
  return (
    <section className={`${css} md:flex md:justify-between md:items-center`}>{children}</section>
  )
}
