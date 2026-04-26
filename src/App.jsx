import "./App.css";
import { useState } from "react";
import GeneralInfo from "./generalInfo.jsx";
import CvPreview from "./cvPreview.jsx";
import Education from "./education.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationList, setEducationList] = useState([]);

  const [isEditing, setIsEditing] = useState(true);

  const addEducation = () => {
    setEducationList((prev) => [...prev, { school: "", degree: "", date: "" }]);
  };

  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
      <Education
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        educationList={educationList}
        setEducationList={setEducationList}
        addEducation={addEducation}
      />
      <button onClick={() => setIsEditing(false)}> Submit</button>

      <CvPreview generalInfo={generalInfo} educationList={educationList} />
    </>
  );
}

export default App;
