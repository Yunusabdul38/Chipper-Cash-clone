import PropTypes from "prop-types";
Modal.propTypes = {
  src: PropTypes.string,
  content:PropTypes.string,
  css:PropTypes.string
};
export default function Modal({src,content,css}) {
  return (
    <div className={`${css} border-[#c1c4e5] border-[1px] shadow-[0_8px_2px_rgba(56,77,105,.1)] py-4 pr-8 pl-4 rounded-[1rem] w-fit flex items-center gap-4 `}>
    <img
      src={src}
      loading="lazy"
      alt="bill-pay-icon"
      className="w-8"  
    />
    <p>{content}</p>
  </div>
  )
}
