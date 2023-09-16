import PropTypes from "prop-types"

HoverText.propTypes={
  children:PropTypes.string
}

export default function HoverText({children ="Read more about our journey"}) {
  return (
    <div className="text-purple-600 font-semibold flex items-center gap-2 group cursor-pointer w-fit">
      <span className="group-hover:w-1 group-hover:h-5 w-5 h-1 rounded transition-all bg-purple-600"></span>
      <p>{children}</p>
    </div>
  );
}
