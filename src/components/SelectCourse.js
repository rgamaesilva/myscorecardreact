import React from 'react';

const SelectCourse = function(props) {
  return(
    <select className="selectHoles" onChange={(event) => (props.changeCourse(event.target.value))}>
      <option>Select Course</option>
        {props.selectCourse.map((course, index) => (
          <option key={index}>{course.name}</option>
        ))}
    </select>
  )
};

export default SelectCourse;
