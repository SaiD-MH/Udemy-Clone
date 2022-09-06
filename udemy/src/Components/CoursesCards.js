import { CommuteSharp } from "@mui/icons-material";
import React from "react";
import { GoStar } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import CardS from "./CardS.module.css";
function CoursesCards() {
  const UdemyCourses = [
    {
      id: "1",
      title: "learn python zero to hero",
      instructor: "jose portila",
      price: 39,
      linkOfImg: "https://img-c.udemycdn.com/course/240x135/692188_9da7_29.jpg",
    },
    {
      id: "2",
      title: "learn python zero to hero",
      instructor: "jose portila",
      price: 39,
      linkOfImg: "https://img-b.udemycdn.com/course/240x135/629302_8a2d_2.jpg",
    },
    {
      id: "3",
      title: "learn python zero to hero",
      instructor: "jose portila",
      price: 39,
      linkOfImg: "https://img-c.udemycdn.com/course/240x135/1350984_2355_6.jpg",
    },
    {
      id: "4",
      title: "learn python zero to hero",
      instructor: "jose portila",
      price: 39,
      linkOfImg: "https://img-c.udemycdn.com/course/240x135/1213952_e17d_2.jpg",
    },
    {
      id: "5",
      title: "learn python zero to hero",
      instructor: "jose portila",
      price: 39,
      linkOfImg: "https://img-c.udemycdn.com/course/240x135/4736178_48c7_4.jpg",
    },
  ];

  const listedOne = UdemyCourses.map((course) => (
    <div className={CardS.coursesImg}>
      <div className={CardS.coursephotot}>
        <img src={course.linkOfImg} alt="MO" />
      </div>

      <div className={CardS.course_details}>
        <a href="">{course.title}</a>

        <span className={CardS.instructor_name}>{course.instructor}</span>
        <span className={CardS.rate_of_course}>4.4</span>
        <GoStar color="orange" />
        <GoStar color="orange" />
        <GoStar color="orange" />
        <GoStar color="orange" />
        <AiOutlineStar color="black" />
        <span className={CardS.price_of_course}>E£{course.price}</span>
      </div>
    </div>
  ));

  return (
    <div className={CardS._container} id="lol">
      {listedOne}
    </div>
  );
}

export default CoursesCards;
