import './OnlineClass.css'

const OnlineClass = () => {
    return (
        <>

            <div className="details-container">
                <div className="classes-left">
                    <div className="left-content">
                        <h2>Online Classes</h2>
                        <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home</p>

                        <p>We wish u Happy Learning. Stay Safe n Healthy.</p>

                        <button className='btn'>Read More</button>

                        <h5>Download The App</h5>

                        <div className="class-icons-container">
                            <div className="class-icon-img">
                                <img src="https://www.nifafinearts.com/images/gplay.png" />
                            </div>
                            <div className="class-icon-img">
                                <img src="https://www.nifafinearts.com/images/appstore.png" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="classes-right">
                    <div className="classes-right-clip">
                        <iframe className="classes-clip-item" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0" allowfullscreen=""></iframe>
                    </div>  
                </div>
            </div>

        </>
    )
}
export default OnlineClass