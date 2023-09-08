import PropTypes from "prop-types"

Card.propTypes={
  children:PropTypes.element,
  style:PropTypes.string
}
function Card ({children,style}){
    return(
        <div className={`${style} mt-2  md:fixed rounded-3xl md:p-5 sm:p-5 md:bg-[#fff] bg-[#202654]  text-white  overflow-y-scroll grid md:overflow-hidden `}>{children}</div>
    )
}
export default Card