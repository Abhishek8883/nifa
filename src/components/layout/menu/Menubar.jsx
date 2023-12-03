import './menu.css'

const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <div id="logo">
          <img src="https://www.nifafinearts.com/images/nifa-new-logo.png" class="img-responsive" />
        </div>

        <div className="menu-desktop">

          <ul id="nav">
            <li className="menu-heading">Home</li>
            <li className="menu-heading">About
              <ul>

                <li>Facilities</li>
              </ul>
            </li>
            <li className="menu-heading">Courses
              <ul>
                <li >B.F.A from UGC Recognised University</li>
                <li>M.A from UGC Recognised University </li>
                <li>Two years Advance Diploma in Fine Arts</li>
                <li>One Year Diploma in Fine Arts</li>
                <li>6 Months Diploma in Fine Arts</li>
                <li>Entrance Preparation For N.I.D</li>
                <li>Entrance Preparation for NIFT</li>
                <li>Animation Sketching</li>
                <li>Entrance Preparation for B.F.A</li>
                <li> 1 to 3 Months Certificate Hobby Course </li>
                <li>Kids Diploma (L-2)</li>
                <li>Kids Diploma (L-1)</li>
                <li>Hobby Certificate Course For Kids</li>
              </ul>
            </li>

            <li className="menu-heading">Activities
              <ul>
                <li>Workshops</li>
                <li>Outdoor</li>
                <li>National Art Seminar &amp; Award Show, 2018</li>
                <li>Media Coverage</li>
                <li>Judging Art Events</li>
                <li>Exhibition</li>
                <li>Daily Activities</li>
              </ul>
            </li>

            <li className="menu-heading">Admission</li>

            <li className="menu-heading">Art Gallery
              <ul>
                <li>Work by Kids Level-2</li>
                <li>Work by Kids Level-1</li>
                <li>Sketching</li>
                <li>Paintings done by Students of Level-3</li>
              </ul>
            </li>

            <li className="menu-heading">Franchise</li>
            <li className="menu-heading">Online Classes</li>
            <li className="menu-heading">Videos</li>
            <li className="menu-heading">Pay Fee</li>
            <li className="menu-heading">Contact</li>
          </ul>
        </div>

        <div className="menu-mobile">
          <div className="menu-mobile-top">
            <ul>
              <li><img src="https://www.nifafinearts.com/images/email.png" />admission@nifafinearts.com</li>

              <li><img src="https://www.nifafinearts.com/images/phone.png" />+91-9555112200/9810130552</li>
            </ul>
          </div>

          <div className="menubar">
            <select name="page_name" onchange="location = this.options[this.selectedIndex].value;">
              <option selected="selected">Home</option>
              <option >About us</option>
              <option >&nbsp;-Facilities</option>

              <option >Courses
              </option><option value="course.php?id=38">&nbsp;-B.F.A from UGC Recognised University</option>
              <option >&nbsp;-M.A from UGC Recognised University </option>
              <option >&nbsp;-Two years Advance Diploma in Fine Arts</option>
              <option >&nbsp;-One Year Diploma in Fine Arts</option>
              <option >&nbsp;-6 Months Diploma in Fine Arts</option>
              <option >&nbsp;-Entrance Preparation For N.I.D</option>
              <option >&nbsp;-Entrance Preparation for NIFT</option>
              <option >&nbsp;-Animation Sketching</option>
              <option >&nbsp;-Entrance Preparation for B.F.A</option>
              <option >&nbsp;- 1 to 3 Months Certificate Hobby Course </option>
              <option >&nbsp;-Kids Diploma (L-2)</option>
              <option >&nbsp;-Kids Diploma (L-1)</option>
              <option >&nbsp;-Hobby Certificate Course For Kids</option>

              <option>Activities</option>

              <option >&nbsp;-Workshops</option>
              <option >&nbsp;-Outdoor</option>
              <option >&nbsp;-National Art Seminar &amp; Award Show, 2018</option>
              <option >&nbsp;-Media Coverage</option>
              <option >&nbsp;-Judging Art Events</option>
              <option >&nbsp;-Exhibition</option>
              <option >&nbsp;-Daily Activities</option>

              <option >Admission</option>
              <option >Art Gallery</option>
              <option >&nbsp;-Work by Kids Level-2</option>
              <option >&nbsp;-Work by Kids Level-1</option>
              <option >&nbsp;-Sketching</option>
              <option >&nbsp;-Paintings done by Students of Level-3</option>

              <option >Franchisee</option>
              <option >Online Classes</option>
              <option >Videos</option>
              <option >Pay Fee</option>
              <option >Contact Us</option>
            </select>
          </div>
        </div>

      </div>

    </>
  )
}
export default Menu