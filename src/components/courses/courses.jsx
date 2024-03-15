import { useEffect } from "react";
import { useState } from "react";
import Course from "../course/course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const loadData = async () => {
        const res = await fetch("data.json");
        const data = await res.json();
        setCourses(data);
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl text-center">
                Course Registration
            </h1>
            <div className=" my-8 flex gap-8">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-9/12">
                    {courses.map((course) => (
                        <Course key={course.id} course={course}></Course>
                    ))}
                </div>
                <div className="w-1/4">
                    <p className="border-b-2 py-2 my-2">Credit Remaining hours 20</p>
                    <p className="font-bold">Course Name</p>
                    <p>Machine learning</p>
                    <p className="border-y-2 py-3 my-3">Total Credit Hours : </p>
                    <p>Total Price : 400 USD</p>
                </div>
            </div>
        </div>
    );
};

export default Courses;
