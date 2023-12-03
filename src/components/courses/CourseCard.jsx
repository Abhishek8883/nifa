const CourseCard = ({ item }) => {
    console.log(item);
    return (
        <>
            <div className="course-card">
                <div className="image">
                    <img src={item.url} alt="" />
                </div>
                <h6>{item.content}</h6>
                <button className="btn">Know More</button>
            </div>
        </>
    )
}
export default CourseCard;