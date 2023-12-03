import "./Header.css";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from "react-router-dom"

const Header1 = () => {
    return (
        <>
            <div className="main">
                <div className="header_left">
                    <h4>
                        Welcome to the National Institute of Fine Arts
                    </h4>
                </div>

                <div className="header_right">
                    <div className="contact">
                        
                            <div className="content">
                                <CallIcon fontSize={"small"} />
                                <span> 9555112200</span>
                            </div>
                        
                        <div className="content">
                            <CallIcon fontSize={"small"} />
                            <span> 9810130552</span>
                        </div>
                    </div>


                    <div className="content">
                        <MailIcon fontSize={"small"} />
                        <span>admission@nifafinearts.com</span>
                    </div>

                    <div className="social_content content">
                        <span><FacebookIcon fontSize={"small"} /></span>
                        <span><TwitterIcon fontSize={"small"} /></span>
                        <span><InstagramIcon fontSize={"small"} /></span>
                        <span><YouTubeIcon fontSize={"small"} /></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header1