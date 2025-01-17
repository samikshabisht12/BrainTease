import React, { useState, useEffect } from "react";

    const courses = {
      "Computer Science And Engineering": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basic of Electrical and Electronics Engineering (P)",
            "Programing for problem solving using C (P)",
            "Engineering Graphics (Web Design) OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basic of Electrical and Electronics Engineering OR Physics",
            "Data Structure Using C",
            "Object Oriented Concepts and Python Programming",
            "Basic of Electrical and Electronics Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Object Oriented Concepts and Python Programming (P)",
            "Workshop Practices (P) OR Engineering Graphics (Web Designing)",
          ],
          3: [
            "Digital Electronics",
            "Advanced-Data Structure",
            "Database Management Systems with SQL",
            "Programming with C++",
            "Introduction to AI and ML",
            "Calculus and Ordinary Differential Equations",
            "Digital Electronics Lab",
            "Advanced-Data Structure Lab",
            "Database Management Systems Lab",
            "Programming with C++ Lab",
          ],
          4: [
            "Operating System",
            "R-Programming",
            "Programming in Java",
            "Microprocessor and Micro-controller",
            "Discrete Mathematics",
            "Computer Organization & Architecture",
            "Operating System Lab",
            "Programming in Java Lab",
            "Microprocessor and Micro-controller Lab",
            "R-Programming Lab",
          ],
          5: [
            "Design and Analysis of Algorithm",
            "Formal Languages & Automata",
            "Web Technology",
            "Computer Networks",
            "Professional Elective Course - I",
            "Open Elective Course - I",
            "Design and Analysis of Algorithm Lab",
            "Web Technology Lab",
            "Computer Networks Lab",
            "Economics for Engineers*",
            "Practical Training - I",
          ],
          6: [
            "Compiler Design",
            "Advance JAVA Programming",
            "Machine Learning and its Applications",
            "Professional Elective Course - II",
            "Professional Elective Course - III",
            "Open Elective Course - II",
            "Advance JAVA Programming Lab",
            "Machine Learning and its Applications Lab",
            "Project - I",
          ],
          7: [],
          8: [],
        },
      },
      "Computer Science And Information Technology": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basic of Electrical and Electronics Engineering (P)",
            "Programing for problem solving using C (P)",
            "Engineering Graphics (Web Design) OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basic of Electrical and Electronics Engineering OR Physics",
            "Data Structure Using C",
            "Object Oriented Concepts and Python Programming",
            "Basic of Electrical and Electronics Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Object Oriented Concepts and Python Programming (P)",
            "Workshop Practices (P) OR Engineering Graphics (Web Designing)",
          ],
          3: [
            "Digital Electronics",
            "Advanced-Data Structure",
            "Database Management Systems with SQL",
            "Programming with C++",
            "Introduction to AI and ML",
            "Calculus and Ordinary Differential Equations",
            "Digital Electronics Lab",
            "Advanced-Data Structure Lab",
            "Database Management Systems Lab",
            "Programming with C++ Lab",
            "Constitution of India",
          ],
          4: [
            "Operating System",
            "R-Programming",
            "Programming in Java",
            "Microprocessor and Microcontroller",
            "Discrete Mathematics",
            "Computer Organization & Architecture",
            "Operating System Lab",
            "Programming in Java Lab",
            "Microprocessor and Microcontroller Lab",
            "R-Programming Lab",
          ],
          5: [
            "Design and Analysis of Algorithm",
            "Formal Languages & Automata",
            "Web Technology",
            "Computer Networks",
            "Professional Elective Course - I",
            "Open Elective Course - I",
            "Design and Analysis of Algorithm Lab",
            "Web Technology Lab",
            "Computer Networks Lab",
            "Economics for Engineers",
            "Practical Training - I",
          ],
          6: [
            "Compiler Design",
            "Advance JAVA Programming",
            "Cloud Computing",
            "Professional Elective Course - II",
            "Professional Elective Course - III",
            "Open Elective Course - II",
            "Advance JAVA Programming Lab",
            "Project - I",
          ],
          7: [],
          8: [],
        },
      },
      "Electronics And Computer Engineering": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basics of Electrical Engineering",
            "Programming for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basics of Electrical Engineering (P)",
            "Programming for problem solving using C (P)",
            "Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basics of Electrical Engineering OR Physics",
            "Data Structure Using C",
            "Python Programming",
            "Electronics Engineering-I",
            "Basics of Electrical Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Python Programming (P)",
            "Electronics Engineering-I (P)",
          ],
          3: [
            "Advanced Data Structure",
            "Database Management Systems with SQL",
            "Introduction to AI & ML",
            "Digital Electronics",
            "Network Analysis and Synthesis",
            "Probability Theory and Stochastic Processes",
            "Advanced Data Structure Lab(P)",
            "Database Management System Lab(P)",
            "Digital Electronics Lab(P)",
            "Network Analysis and Synthesis_Lab(P)",
          ],
          4: [
            "Analog and Digital Communication",
            "Electronic Devices and Circuits",
            "Design and Analysis of Algorithm",
            "Computer Organization & Architecture",
            "Discrete Mathematics",
            "Electromagnetic Field Theory",
            "Design and Analysis of Algorithm LAB",
            "Analog and Digital Communication Lab",
            "Electronic Devices and Circuits Lab",
          ],
          5: [
            "Operating System",
            "Digital Signal Processing",
            "Computer Network",
            "Automata theory and compiler Design",
            "Open Elective-I",
            "Professional Elective - I",
            "Operating System Lab",
            "Computer Network Lab",
            "Digital Signal Processing Lab",
            "Automata theory and compiler Design Lab",
            "Practical Training-I",
          ],
          6: [
            "Control System Engineering",
            "Microprocessor & Interfacing",
            "Java Programming",
            "Professional Elective- II",
            "Professional Elective -III",
            "Open Elective - II",
            "Microprocessor & Interfacing LAB",
            "Java Programming Lab",
            "Control System Engineering Lab",
            "Project-I",
            "Economics for Engineers",
          ],
          7: [],
          8: [],
        },
      },
      "Electronics And Communication Engineering": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basics of Electrical Engineering",
            "Programming for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basics of Electrical Engineering (P)",
            "Programming for problem solving using C (P)",
            "Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basics of Electrical Engineering OR Physics",
            "Data Structure Using C",
            "Python Programming",
            "Electronics Engineering-I",
            "Basics of Electrical Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Python Programming (P)",
            "Electronics Engineering-I (P)",
          ],
          3: [
            "Analog & Digital Communication Systems",
            "Electromagnetic Field Theory",
            "Digital Electronics",
            "Network Analysis and Synthesis",
            "Signal & Systems",
            "Mathematical & Computational Techniques",
            "Analog & Digital Communication Lab",
            "Digital Electronics Lab",
            "Network Analysis and Synthesis Lab",
          ],
          4: [
            "Internet of Things",
            "Digital & Data Communication",
            "Electronic Measurement & Instrumentation",
            "Probability Theory and Stochastic Processes",
            "Computer Organization & Architecture",
            "Microprocessor & Interfacing",
            "Internet of Things Lab",
            "Electronic Measurement & Instrumentation Lab",
            "Microprocessor & Interfacing Lab",
            "PCB Design & Workshop Lab",
            "Scientific & Technical writing Skills",
          ],
          5: [
            "Computer Networks",
            "Digital System Design",
            "Digital Signal Processing",
            "Wireless & Satellite Communication",
            "Program Elective - I",
            "Open Elective - I",
            "Computer Networks Lab",
            "Digital Signal Processing Lab",
            "Digital System Design Lab",
            "Wireless & Satellite Communication lab",
            "Practical Training-I",
          ],
          6: [
            "Control System Engineering",
            "Microwave & Radar Engineering",
            "Program Elective - II",
            "Program Elective - III",
            "Open Elective - II",
            "VLSI System Design",
            "Control System LAB",
            "Microwave & Radar Engineering Lab(P)",
            "Project-I",
            "Economics for Engineers",
          ],
          7: [],
          8: [],
        },
      },
      "Electrical And Electronics Engineering": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basics of Electrical Engineering",
            "Programming for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basics of Electrical Engineering (P)",
            "Programming for problem solving using C (P)",
            "Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basics of Electrical Engineering OR Physics",
            "Data Structure Using C",
            "Python Programming",
            "Electronics Engineering-I",
            "Basics of Electrical Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Python Programming (P)",
            "Electronics Engineering-I (P)",
          ],
          3: [
            "Electrical Machine I",
            "Mathematical and Computational Techniques",
            "Digital Electronics",
            "Network Analysis and Synthesis",
            "Signals and System",
            "Electromagnetic Field Theory",
            "Electrical Machine I Lab",
            "Mathematical and Computational Techniques Lab",
            "Digital Electronics Lab",
            "Network Analysis and Synthesis Lab",
          ],
          4: [
            "Transmission and Distribution",
            "Electrical Machine II",
            "Power Electronics",
            "Electronic Measurement and Instrumentation",
            "Electric Engineering Materials",
            "Probability Theory and Stochastic Processes",
            "Transmission and Distribution Lab",
            "Electrical Machine II Lab",
            "Power Electronics Lab",
            "Electronic Measurement and Instrumentation Lab",
          ],
          5: [
            "Power System I",
            "Digital System Design",
            "Communication Systems",
            "Digital Signal Processing",
            "Professional Elective I",
            "Open Elective I",
            "Power System I Lab",
            "Digital System Design Lab",
            "Communication Systems Lab",
            "Digital Signal Processing Lab",
            "Practical Training-I",
          ],
          6: [
            "Power System II",
            "Control System",
            "Microprocessors and Microcontrollers",
            "Professional Electives II",
            "Professional Electives III",
            "Open Elective II",
            "Power System II Lab",
            "Control System Lab",
            "Microprocessors and Microcontrollers Lab",
            "Project-I",
          ],
          7: [],
          8: [],
        },
      },
      "Mechanical Engineering": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Chemistry OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Chemistry (P) OR Basics of Electrical and Electronics Engineering (P)",
            "Programing for Problem solving using C (P)",
            "Engineering Drawing OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basics of Electrical and Electronics Engineering OR Chemistry",
            "Physics",
            "Engineering Mechanics",
            "Basics of Electrical and Electronics Engineering (P) OR Chemistry (P)",
            "Physics (P)",
            "Workshop Practices (P) OR Engineering Drawing",
          ],
          3: [
            "Mathematics-III",
            "Fluid Mechanics",
            "Thermodynamics",
            "Industrial Automation",
            "Production Process-I",
            "Strength of Materials",
            "Fluid Mechanics Lab",
            "Thermodynamics Lab",
            "Strength of Materials Lab",
          ],
          4: [
            "Applied Thermodynamics",
            "Machine Tools and Machining",
            "Kinematics of Machine",
            "Instrumentation and Control",
            "Production Process-II",
            "Computer Aided Design and Manufacturing",
            "Instrumentation and Control Lab",
            "Kinematics of Machine Lab",
            "Computer Aided Design and Manufacturing Lab",
            "Scientific and Technical writing Skills",
          ],
          5: [
            "Dynamics of Machines",
            "Internal Combustion Engines and Gas Turbines",
            "Design of Machine element-I",
            "Heat Transfer",
            "Open Elective -I",
            "Professional Elective-I",
            "Dynamics of Machines Lab",
            "Internal Combustion Engines and Gas Turbines Lab",
            "Heat Transfer Lab",
            "Practical Training I",
          ],
          6: [
            "Entrepreneurship Development",
            "Fluid Machines",
            "Design of machine Element-II",
            "Operation Research",
            "Open Elective-II",
            "Elective-I",
            "Elective-II",
            "Fluid Machines Lab",
            "Economics for Engineers",
            "Project-I",
          ],
          7: [],
          8: [],
        },
      },
      "Robotics and Automation": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Chemistry OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Chemistry (P) OR Basics of Electrical and Electronics Engineering (P)",
            "Programing for Problem solving using C (P)",
            "Engineering Drawing OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basics of Electrical and Electronics Engineering OR Chemistry",
            "Physics",
            "Engineering Mechanics",
            "Basics of Electrical and Electronics Engineering (P) OR Chemistry (P)",
            "Physics (P)",
            "Workshop Practices (P) OR Engineering Drawing",
          ],
          3: [
            "Mathematics-III",
            "Electronic Devices and Circuits",
            "Digital Electronics",
            "Thermodynamics",
            "Object Oriented Programming using C++",
            "Strength of Materials",
            "Digital Electronics (P)",
            "Thermodynamics_LAB (P)",
            "Strength of materials_LAB (P)",
            "Object Oriented Programming using C++ (P)",
          ],
          4: [
            "Statistics And Numerical Methods",
            "Machine Elements Design",
            "Power Electronics & Drives",
            "Control System Engineering",
            "Kinematics of Machine",
            "Computer Aided Design & Manufacturing",
            "Power Electronics & Drives Lab",
            "Kinematics of Machine Lab.",
            "Computer Aided Design & Manufacturing LAB",
            "Scientific & Technical writing Skills *",
          ],
          5: [
            "Introduction to Robotics",
            "Sensors And Instrumentation",
            "CNC Machine and Metrology",
            "Introduction of AI & MI",
            "Linear Integrated Circuits and Applications",
            "Professional Elective-I",
            "Open Elective -1",
            "Robotics Engineering Lab (P)",
            "PLC-SCADA Lab",
            "CNC Machine and Metrology LAB",
            "Practical Training -I",
          ],
          6: [
            "Microprocessors And Microcontrollers",
            "Automation System Design",
            "Hydraulic & Pneumatics",
            "Professional Elective - II",
            "Professional Elective -III",
            "Open Elective - II",
            "Microprocessors And Microcontrollers Lab",
            "Hydraulic and Pneumatics Lab",
            "Project-I",
            "Economics for Engineers*",
          ],
          7: [],
          8: [],
        },
      },
      "Computer Science And Engineering (AI And ML)": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basic of Electrical and Electronics Engineering (P)",
            "Programing for problem solving using C (P)",
            "Engineering Graphics (Web Design) OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basic of Electrical and Electronics Engineering OR Physics",
            "Data Structure Using C",
            "Object Oriented Concepts and Python Programming",
            "Basic of Electrical and Electronics Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Object Oriented Concepts and Python Programming (P)",
            "Workshop Practices (P) OR Engineering Graphics (Web Designing)",
          ],
          3: [
            "Digital Electronics",
            "Advanced-Data Structure",
            "Database Management Systems with SQL",
            "Programming for Data Science and AI",
            "Artificial Intelligence",
            "Discrete Mathematics",
            "Digital Electronics Lab",
            "Advanced-Data Structure Lab",
            "Database Management Systems Lab",
            "Programming for Data Science & AI Lab",
            "Constitution of India",
          ],
          4: [
            "Operating System",
            "R-Programming",
            "Programming in Java",
            "Design & Analysis of Algorithms",
            "Computer Organization & Architecture",
            "Computer Networks",
            "Operating System Lab",
            "Programming in Java Lab",
            "Design & Analysis of Algorithms Lab",
            "R-Programming Lab",
          ],
          5: [
            "Predictive Analytics",
            "Formal Languages & Automata",
            "Big Data Analytics",
            "Machine Learning and its Applications",
            "Professional Elective Course - I",
            "Open Elective Course - I",
            "Predictive Analytics Lab",
            "Big Data & Analytics Lab",
            "Machine Learning Lab",
            "Economics for Engineers",
            "Practical Training - I",
          ],
          6: [
            "Compiler Design",
            "Statistical Computing",
            "Deep Learning",
            "Professional Elective Course - II",
            "Professional Elective Course - III",
            "Open Elective Course - II",
            "Deep Learning Lab",
            "Statistical Computing Lab",
            "Project - I",
          ],
          7: [],
          8: [],
        },
      },
      "Computer Science And Engineering (IOT & Cyber Security)": {
        semesters: 8,
        subjects: {
          1: [
            "Communication Skills in English",
            "Mathematics-I",
            "Physics OR Basic of Electrical and Electronics Engineering",
            "Programing for problem solving using C",
            "Basics of Environmental Science",
            "Communication Skills in English (P)",
            "Physics (P) OR Basic of Electrical and Electronics Engineering (P)",
            "Programing for problem solving using C (P)",
            "Engineering Graphics (Web Design) OR Workshop Practices (P)",
            "Sports (Audit Course) Compulsory",
          ],
          2: [
            "Mathematics-II",
            "Human Value & Soft Skills",
            "Basic of Electrical and Electronics Engineering OR Physics",
            "Data Structure Using C",
            "Object Oriented Concepts and Python Programming",
            "Basic of Electrical and Electronics Engineering (P) OR Physics (P)",
            "Data Structure Using C (P)",
            "Object Oriented Concepts and Python Programming (P)",
            "Workshop Practices (P) OR Engineering Graphics (Web Designing)",
          ],
          3: [
            "Digital Electronics",
            "Advanced-Data Structure",
            "Database Management Systems with SQL",
            "Programming with C++",
            "Foundations of Blockchain Technology",
            "Mathematics - III",
            "Digital Electronics Lab",
            "Advanced-Data Structure Lab",
            "Database Management Systems Lab",
            "Programming with C++ Lab",
          ],
          4: [
            "Operating System",
            "Introduction to Internet of Things",
            "Programming in Java",
            "Microprocessor and Microcontroller",
            "Discrete Mathematics",
            "Computer Organization & Architecture",
            "Operating System Lab",
            "Programming in Java Lab",
            "Microprocessor and Microcontroller Lab",
            "Internet of Things Lab",
          ],
          5: [
            "Design and Analysis of Algorithm",
            "Formal Languages & Automata",
            "Cryptocurrency Ethereum",
            "Computer Networks",
            "Professional Elective Course - I",
            "Open Elective Course - I",
            "Design and Analysis of Algorithm Lab",
            "Computer Networks Lab",
            "Economics for Engineers*",
            "Practical Training - I",
          ],
          6: [
            "Compiler Design",
            "Advance JAVA Programming",
            "Cloud Computing",
            "Professional Elective Course - II",
            "Professional Elective Course - III",
            "Open Elective Course - II",
            "Advance JAVA Programming Lab",
            "Project - I",
          ],
          7: [],
          8: [],
        },
      },
    };

    function App() {
      const [selectedCourse, setSelectedCourse] = useState("");
      const [selectedSemester, setSelectedSemester] = useState("");
      const [marks, setMarks] = useState({});
      const [cgpa, setCgpa] = useState(null);
      const [isDarkMode, setIsDarkMode] = useState(false);

      useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }, [isDarkMode]);

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

      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };

      return (
        <div className="container">
          <label className="theme-toggle">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
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
          {selectedCourse && selectedSemester && currentSubjects.length > 0 && (
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

    export default App;
