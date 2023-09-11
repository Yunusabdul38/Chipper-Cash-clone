import Button from "./Button";
import PropTypes from "prop-types";

SummaryList.propTypes = {
  header: PropTypes.string,
  children: PropTypes.element,
  headerCss: PropTypes.string,
  text:PropTypes.string
};
export default function SummaryList({ header, children, headerCss,text }) {
  return (
    <aside className="grid gap-5 md:w-2/5">
      <h1 className={`${headerCss} font-semibold text-3xl`}>{header}</h1>
      {children}
      <Button text={text} />
    </aside>
  );
}
