import "../EstilosPuka/Social.css"; 
import { FaFacebook, FaYoutube, FaTwitch, FaTwitter} from "react-icons/fa"
function Social() { 
    return(
        <div className="redes">
            <FaFacebook className="icon"></FaFacebook>
            <FaTwitch className="icon"></FaTwitch>
            <FaYoutube className="icon"></FaYoutube>
            <FaTwitter className="icon"></FaTwitter>
        </div>
    )
}

export default Social;