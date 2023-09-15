import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";

const Home = () => {
  const [courses, setCourses] = useState([0]);

  const [selectedCourse, setSelectedCourse] = useState([]);


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelect = course => {
    setSelectedCourse([...selectedCourse, course]);
  }

  return (
    <div className="container max-w-screen-xl px-2 md:px-4 lg:px-8 mx-auto my-8 flex  flex-col lg:flex-row gap-8">
      <div className="card-container flex-1  lg:w-3/4 ">
        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course,idx) => (
            <div key={idx}  className=" p-2 rounded-lg bg-[#FFFFFF] shadow-lg space-y-3 ">
              <img className="w-full" src={course.cover_image} alt="" />
              <h1 className=" font-bold ">{course.title}</h1>
              <p className=" font-extralight ">{course.description}</p>
              {/* pricing and credit container  */}
              <div className="flex gap-4 font-extralight ">
                {/* pricing  */}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 1V23"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>{" "}
                  Price: {course.price}
                </div>
                {/* credit  */}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                      stroke="#1C1B1B"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Credit: {course.credit}hr
                </div>
              </div>
            <button onClick={()=>handleSelect(course)} className="btn bg-[#2F80ED] text-white px-3 w-full mx-auto rounded-lg">
                Select
              </button>
          
            </div>
          ))}
        </div>
      </div>
      {/* Cart  */}
        <div >
      <Cart selectedCourse={selectedCourse}></Cart>

        </div>
    </div>
  );
};

export default Home;
