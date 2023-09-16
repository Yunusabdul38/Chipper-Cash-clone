import PropTypes from "prop-types"
import { FaGooglePlay,FaApple} from "react-icons/fa";
AppIcon.propTypes={
  color:PropTypes.string,
}
export default function AppIcon({color}) {
  return (
    <div className={`${color} capitalize inline-flex gap-1 text-base items-center`}>
   <FaApple />
    apple store
    <span className="ml-3 inline-flex gap-1 items-center">
      <FaGooglePlay />
      google play
    </span>
  </div>
  )
}
