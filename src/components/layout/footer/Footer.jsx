import './footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <div className="footer-container">

        <div className="footer-top">

          <div className="detail-box">
            <p>Company</p>
            <ul>
              <li className="list-item">About</li>
              <li className="list-item">Facilities</li>
              <li className="list-item">Career</li>
              <li className="list-item">Contact Us</li>
              <li className="list-item">Terms & Conditions</li>
              <li className="list-item">Refund Policy</li>
              <li className="list-item">Privacy Policy</li>
            </ul>
          </div>


          <div className="detail-box">
            <p>Activities</p>
            <ul>
              <li className="list-item">Art Gallery</li>
              <li className="list-item">Workshops</li>
              <li className="list-item">Outdoor Activities</li>
              <li className="list-item">Media Coverage</li>
              <li className="list-item">Art Events</li>
              <li className="list-item">Exhibition</li>
              <li className="list-item">Daily Activities</li>
            </ul>
          </div>


          <div className="detail-box">
            <p>Popular Course</p>
            <ul>
              <li className="list-item">Diploma In Fine Arts</li>
              <li className="list-item">Certificate Hobby Course</li>
              <li className="list-item">Entrance Preparation</li>
              <li className="list-item">BFA</li>
              <li className="list-item">Animation Sketching</li>
              <li className="list-item">Kids Diploma</li>
            </ul>
          </div>


          <div className="detail-box">
            <p>Our Locations</p>
            <ul>
              <li className="list-item">Gurgaon (Dlf Phase - 4)</li>
              <li className="list-item">Mumbai (Andheri West)</li>
              <li className="list-item">South Delhi (Kailash Colony)</li>
            </ul>
            <p>International Branches</p>
            <ul>
              <li className="list-item">London</li>
              <li className="list-item">USA</li>
              <li className="list-item">Dubai, UAE</li>
            </ul>
          </div>


        </div>


        <div className="footer-bottom">
          <div className="fb-left">
            <h6>NIFA Is A Unit Of Nifaedutech Pvt Ltd</h6>
            <h6>Connect With Us</h6>
            <p >9555112200,9810130552</p>
            <p>admission@nifafinearts.com</p>

            <div className="fb-left-img">
              <div className="icon">
                <FacebookIcon color='primary' />
              </div>
              <div className="icon ">
                <TwitterIcon style={{ color: '#1DA1F2' }} />
              </div>
              <div className="icon">
                <InstagramIcon style={{ color: '#E1306C' }} />
              </div>
              <div className="icon ">
                <YouTubeIcon style={{ color: '#ff0000' }} />
              </div>
            </div>
          </div>



          <div className="fb-right">
            <h6>Download The App</h6>
            <div className="icons-container">
              <div className="icon-img">
                <img src="https://www.nifafinearts.com/images/gplay.png" />
              </div>
              <div className="icon-img">
                <img src="https://www.nifafinearts.com/images/appstore.png" />
              </div>
            </div>
            <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer