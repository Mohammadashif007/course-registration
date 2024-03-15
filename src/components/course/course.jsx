

const Course = ({ course }) => {
    const { image, title, price, description, credits } = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="flex justify-between items-center my-2">
                        <p>Price : {price}</p>
                        <p>Credits : {credits}</p>
                    </div>
                    <div className="">
                        <button className="btn btn-primary w-full">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
