import PropTypes from "prop-types";
SectionCard.propTypes = {
  children: PropTypes.array,
  css:PropTypes.string
};
export default function SectionCard({children,css}) {
  return (
    <section className={`${css} flex justify-between md:items-center px-5 py-5 xl:px-24 md:px-10`}>{children}</section>
  )
}
