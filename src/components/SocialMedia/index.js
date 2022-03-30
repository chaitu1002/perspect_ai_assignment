import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import './index.css'

const SocialMedia = () => (
  <div className="social-media-container">
    <div className="round-container">
      <FaFacebookF className="social-icon" />
    </div>
    <div className="round-container">
      <AiOutlineTwitter className="social-icon" />
    </div>
    <div className="round-container">
      <AiOutlineInstagram className="social-icon" />
    </div>
  </div>
)

export default SocialMedia
