import PropTypes from "prop-types"

Images.propTypes={
    img:PropTypes.string,
    alt:PropTypes.string,
    style:PropTypes.string
}
function Images({style,img,alt}){
    return(
        <img className={`w-[5%] ${style}`} src={img} alt={alt}/>
    )
}
export default Images