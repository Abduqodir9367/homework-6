import React, { useState, useEffect } from "react";
import { View } from "./components/View";

const getDatafromLS = () => {
  const data = localStorage.getItem("students");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const App = () => {
  const [students, setstudents] = useState(getDatafromLS());

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddstudentSubmit = (e) => {
    e.preventDefault();
    let student = {
      firstname,
      lastname,
      phone,
    };
    setstudents([...students, student]);
    setFirstname("");
    setLastname("");
    setPhone("");
  };

  const deleteStudent = (phone) => {
    const filteredBooks = students.filter((element, index) => {
      return element.phone !== phone;
    });
    setstudents(filteredBooks);
  };

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  return (
    <div className="wrapper">
      <h1>Contacts</h1>
      <p>Students</p>
      <div className="main">
        <div className="form-container">
          <form
            autoComplete="off"
            className="form-group"
            onSubmit={handleAddstudentSubmit}
          >
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              placeholder="Abduqodir"
              required
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            ></input>
            <br></br>
            <label>Lastname</label>
            <input
              ype="text"
              className="form-control"
              placeholder="Rixsiboyev"
              required
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            ></input>
            <br></br>
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="+998 (99) 047-93-67"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              Add
            </button>
          </form>
        </div>

        <div className="view-container">
          {students.length > 0 && (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Phone</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <View students={students} deleteStudent={deleteStudent} />
                  </tbody>
                </table>
              </div>
              <button
                className="btn btn-danger btn-md"
                onClick={() => setstudents([])}
              >
                Remove All
              </button>
            </>
          )}
          {students.length < 1 && <div>No students are added yet</div>}{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
