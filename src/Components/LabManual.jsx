import React, { useState } from "react";
    import courses from "../data/courses";
    import labManuals from "../data/labManuals";

    function LabManual() {
      const [selectedCourse, setSelectedCourse] = useState("");

      const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
      };

      const allCourses = ["First Year", ...Object.keys(courses)];

      const handleDownload = (url, name) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return (
        <div className="container">
          <h2>Lab Manuals</h2>
          <div className="form-group">
            <label>Select Course:</label>
            <select value={selectedCourse} onChange={handleCourseChange}>
              <option value="">Select Course</option>
              {allCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          {selectedCourse && (
            <div className="lab-manual-list">
              <h3>Lab Manuals for {selectedCourse}:</h3>
              {labManuals[selectedCourse] ? (
                <ul>
                  {labManuals[selectedCourse].map((manual, index) => (
                    <li key={index} className="subject-item">
                      <span>{manual.name}</span>
                      <button onClick={() => handleDownload(manual.url, manual.name)}>
                        Download
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No lab manuals available for this course.</p>
              )}
            </div>
          )}
        </div>
      );
    }

    export default LabManual;
