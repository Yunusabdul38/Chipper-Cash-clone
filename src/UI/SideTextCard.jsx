import PropTypes from "prop-types";
SideTextCard.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  children: PropTypes.array,
  mainTextCss:PropTypes.string,
  subTextCss:PropTypes.string
};
export default function SideTextCard({
  mainText,
  subText,
  mainTextCss,
  subTextCss,
  children
}) {
  let text = mainText
  if(text.startsWith("move")){
    text =<>{mainText.split(" ").slice(0,2).join(" ")}<br/> {mainText.split(" ").slice(2,4).join(" ")}</>
  }
  return (
      <div className="flex justify-between flex-col items-baseline gap-8">
        <h1 className={`${mainTextCss} font-semibold text-4xl`}>{text}</h1>
        <p className={subTextCss}>{subText}</p>
        {children}
      </div>
  );
}
