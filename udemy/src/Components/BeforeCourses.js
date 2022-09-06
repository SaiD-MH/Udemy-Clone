import React from "react";
import BeforeCoursesSection from "./BeforeCoursesSection.module.css";
function BeforeCourses() {
  return (
    <div className={BeforeCoursesSection.befor_course}>
      <img
        src="https://img-b.udemycdn.com/notices/featured_banner/image_udlite/5bf6274c-4a57-42ce-93d6-9775b06730be.jpg"
        className={BeforeCoursesSection.img_after_nav}
      />

      <div className={BeforeCoursesSection._info}>
        <h1 className={BeforeCoursesSection.justHeader}>
          Learning that gets you
        </h1>

        <p className={BeforeCoursesSection._quote}>
          Skills for your present (and your future). Get started with us.
        </p>
      </div>
    </div>
  );
}

export default BeforeCourses;
