import PropTypes from "prop-types";
Button.propTypes = {
  text: PropTypes.string,
};
export default function Button({text}) {
  return (
    <button className="w-fit bg-[#6945d8] capitalize text-white py-3 px-5 rounded-[.75rem] font-medium hover:grayscale transition text-xs md:text-sm xl:text-base">
      {text}
    </button>
  );
}
