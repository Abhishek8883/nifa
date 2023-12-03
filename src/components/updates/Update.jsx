import Marquee from "react-fast-marquee";
import './update.css'

const Update = () => {
    return (
        <>
            <div className="update-container">
                <h5>Nifa Updates ::</h5>
                <div className="marquee">
                    <Marquee pauseOnHover={"true"} >
                        <p>
                            <strong>All NIFA courses are now available worldwide through our Live and Interactive Online Classes.
                            Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.
                            </strong>
                        </p>
                        <div className="gap"></div>
                    </Marquee>
                </div>
            </div>

        </>
    )
}
export default Update