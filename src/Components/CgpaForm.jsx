import React, { useState } from "react";
    import courses from "../data/courses";

    function CgpaForm() {
      const [selectedCourse, setSelectedCourse] = useState("");
      const [selectedSemester, setSelectedSemester] = useState("");
      const [marks, setMarks] = useState({});
      const [cgpa, setCgpa] = useState(null);

      const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
        setSelectedSemester("");
        setMarks({});
        setCgpa(null);
      };

      const handleSemesterChange = (event) => {
        setSelectedSemester(event.target.value);
        setMarks({});
        setCgpa(null);
      };

      const handleMarkChange = (subject, event) => {
        setMarks({ ...marks, [subject]: event.target.value });
      };

      const calculateCgpa = () => {
        if (!selectedCourse || !selectedSemester) {
          setCgpa(null);
          return;
        }
        const currentSubjects =
          courses[selectedCourse]?.subjects[selectedSemester] || [];

        if (currentSubjects.length === 0) {
          setCgpa(0);
          return;
        }

        let totalMarks = 0;
        let maxMarks = currentSubjects.length * 100;

        for (const subject of currentSubjects) {
          const mark = parseFloat(marks[subject]);
          if (!isNaN(mark)) {
            totalMarks += mark;
          }
        }

        const calculatedCgpa = (totalMarks / maxMarks) * 9.5;
        setCgpa(calculatedCgpa.toFixed(2));
      };

      const currentSubjects =
        selectedCourse && selectedSemester
          ? courses[selectedCourse]?.subjects[selectedSemester] || []
          : [];

      return (
        <div className="container">
          <h2>CGPA Calculator</h2>
          <div className="form-group">
            <label>Select Course:</label>
            <select value={selectedCourse} onChange={handleCourseChange}>
              <option value="">Select Course</option>
              {Object.keys(courses).map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          {selectedCourse && (
            <div className="form-group">
              <label>Select Semester:</label>
              <select value={selectedSemester} onChange={handleSemesterChange}>
                <option value="">Select Semester</option>
                {Array.from(
                  { length: courses[selectedCourse].semesters },
                  (_, i) => i + 1
                ).map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedCourse && selectedSemester && (
            <div className="subject-list">
              <h3>Subjects:</h3>
              {currentSubjects.map((subject) => (
                <div key={subject} className="subject-item">
                  <span>{subject}</span>
                  <input
                    type="number"
                    placeholder="Marks"
                    value={marks[subject] || ""}
                    onChange={(event) => handleMarkChange(subject, event)}
                  />
                </div>
              ))}
            </div>
          )}
          {selectedCourse &&
            selectedSemester &&
            currentSubjects.length > 0 && (
              <div className="form-group">
                <button onClick={calculateCgpa}>Calculate CGPA</button>
              </div>
            )}
          {cgpa !== null && (
            <div className="cgpa-result">
              <p>CGPA: {cgpa}</p>
            </div>
          )}
        </div>
      );
    }

    export default CgpaForm;
