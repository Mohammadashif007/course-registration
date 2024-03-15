import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [purchaseCourse, setPurchaseCourse] = useState([]);
    const [price , setPrice ] = useState(0);
    const [credit, setCredit] = useState(20);

    const loadData = async () => {
        const res = await fetch("data.json");
        const data = await res.json();
        setCourses(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const selectCourse = (course) => {
        const search = purchaseCourse.find(x => x.id === course.id);
        if(search !== undefined) return
        if(credit <= 0) return 
        const totalPrice = price + course.price;
        const remainingCredit = credit - course.credits;
        setPurchaseCourse([...purchaseCourse, course]);
        setPrice(totalPrice);
        setCredit(remainingCredit);
    };

    console.log(purchaseCourse);

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl text-center">
                Course Registration
            </h1>
            <div className=" my-8 flex gap-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-9/12">
                    {courses.map((course) => (
                        <Course
                            key={course.id}
                            course={course}
                            selectCourse={selectCourse}
                        ></Course>
                    ))}
                </div>
                <div className="w-1/4">
                    <p className="border-b-2 py-2 my-2">
                        Credit Remaining hours {credit}
                    </p>
                    <p className="font-bold">Course Name</p>
                    {purchaseCourse.map((x) => (
                        <div key={x.id}>
                            <p>{x.title}</p>
                        </div>
                    ))}
                    <p className="border-y-2 py-3 my-3">
                        Total Credit Hours :{" "}
                    </p>
                    <p>Total Price :  {price}USD</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;
