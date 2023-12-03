import "./courses.css";
import CourseCard from "./CourseCard";

let courses = [{
    url: "https://www.nifafinearts.com/images/animation-sketching.jpg",
    content: "6 Months Diploma in Sketching & Oil Painting - Regular/Part time"
},
{
    url: "https://www.nifafinearts.com/images/3mchc.jpg",
    content: "1 to 3 Months Certificate Hobby Course (Regular and Weekend)"
},
{
    url: "https://www.nifafinearts.com/images/1ydfa.jpg",
    content: "One Year Diploma in Fine Arts-Regular/Part Time-Level-3"
},
{
    url: "https://www.nifafinearts.com/images/2ydfa.jpg",
    content: "Two years Advance Diploma in Fine Arts - Regular/Part time"
},
{
    url: "https://www.nifafinearts.com/images/entrance-prepration.jpg",
    content: "Entrance Preparation For N.I.D"
},
{
    url: "https://www.nifafinearts.com/images/bfa.jpg",
    content: "B.F.A from UGC Recognised University"
},
{
    url: "https://www.nifafinearts.com/images/ma.jpg",
    content: "M.A in Painting from UGC Recognised University"
},
{
    url: "https://www.nifafinearts.com/images/entrance-prepration3.jpg",
    content: "Entrance preparation for B.F.A"
},
{
    url: "https://www.nifafinearts.com/images/kidl1.jpg",
    content: "Kids 1 year Diploma (Level-1)"
},
{
    url: "https://www.nifafinearts.com/images/kidl2.jpg",
    content: "Kids 1 year Diploma (Level-2)"
},
{
    url: "https://www.nifafinearts.com/images/entrance-prepration2.jpg",
    content: "Entrance Preparation for NIFT"
},
{
    url: "https://www.nifafinearts.com/images/hccfk.jpg",
    content: "3 Months Hobby Certificate Course For Kids"
},
]


const Courses = () => {
    return (
        <>
            <div className="course-container">
                <h1>Our Courses</h1>

                <div className="cards">
                    {courses.map((item) =>
                        <CourseCard item={item} />
                    )}
                </div>
            </div>
        </>
    )
}
export default Courses;