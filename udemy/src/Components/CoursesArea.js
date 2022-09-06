import React from "react";
import CoursesAreaS from "./CoursesAreaS.module.css";
import CardS from "./CardS.module.css";
import { GoStar } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";

function CoursesArea() {
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
    <div className={CoursesAreaS.course_area}>
      <h1 className={CoursesAreaS.hI}>A broad selection of Courses</h1>
      <p className={CoursesAreaS.pp}>
        Choose from 185.000 online video courses with new additions published
        every month
      </p>

      <div className={CoursesAreaS.list_of_courses}>
        <button
          id="_active"
          className={`${CoursesAreaS.linker} ${CoursesAreaS.python}`}>
          Python
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.excel}`}>
          Excel
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.web}`}>
          Web Development
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.js}`}>
          JavaScript
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.ds}`}>
          Data Science
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.aws}`}>
          AWS Certification
        </button>
        <button className={`${CoursesAreaS.linker} ${CoursesAreaS.draw}`}>
          Drawing
        </button>
      </div>

      <div className={CoursesAreaS.content_area}>
        <h1 className={CoursesAreaS.courses_area_header}>
          Expand your career opportunities with Python
        </h1>

        <p className={CoursesAreaS.courses_area_p}>
          Take one of Udemy's range of Python courses and learn how to code
          using this incredibly useful language. its <br></br>simple syntax and
          readabitiy makes Python perfect for Flask, Django, data science, and
          machine learning. You 'll<br></br> learn how to build everything from
          games to sites to appps. Choose from a range of courses that will
          appeal to...
        </p>

        <button className={CoursesAreaS._explore}>Explore Python</button>

        <div className={CardS._container} id="lol">
          {listedOne}
        </div>
      </div>
    </div>
  );
}

export default CoursesArea;
