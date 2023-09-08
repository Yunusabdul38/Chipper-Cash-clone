import PropTypes from "prop-types";

TestimonyDetails.propTypes = {
  img: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  alt: PropTypes.string,
};
function TestimonyDetails({ img, content, date, alt }) {
  return (
    <div className="md:max-w-sm shadow-[0_8px_2px_rgba(56,77,105,.1)] grid gap-3 rounded-[15px] border  p-4 border-[#c1c4e5]">
      <div className="flex  justify-between items-center">
        <span className="grid">💥 💥 💥 💥 💥</span>
        <img src={img} className="w-[50px]" alt={alt} />
      </div>
      <p className="text-sm">{content}</p>
      <p className="text-xs">Play Store review, {date}</p>
    </div>
  );
}

export default TestimonyDetails;
