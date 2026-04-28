import "./App.css";
import { useState, useEffect } from "react";
import GeneralInfo from "./generalInfo.jsx";
import CvPreview from "./cvPreview.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";

function App() {
  const [generalInfo, setGeneralInfo] = useState(() => {
    const saved = localStorage.getItem("generalInfo");
    return saved
      ? JSON.parse(saved)
      : {
          name: "",
          email: "",
          phone: "",
        };
  });

  useEffect(() => {
    localStorage.setItem("generalInfo", JSON.stringify(generalInfo));
  }, [generalInfo]);

  const [educationList, setEducationList] = useState(() => {
    const saved = localStorage.getItem("education");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(educationList));
  }, [educationList]);
  const [isEditing, setIsEditing] = useState(true);

  const [experienceList, setExperienceList] = useState(() => {
    const saved = localStorage.getItem("experience");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("experience", JSON.stringify(experienceList));
  }, [experienceList]);

  const addEducation = () => {
    setEducationList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        date: "",
        isEditing: true,
      },
    ]);
  };

  const handleDelete = (indexToRemove) => {
    setEducationList((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const toggleEdit = (index) => {
    setEducationList((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;

        if (!item.school || !item.degree || !item.date) {
          alert("Please fill all fields");
          return item;
        }

        return { ...item, isEditing: !item.isEditing };
      }),
    );
  };

  const addExperience = () => {
    setExperienceList((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
        isEditing: true,
      },
    ]);
  };

  const deleteExperience = (indexToRemove) => {
    setExperienceList((prev) =>
      prev.filter((_, index) => index !== indexToRemove),
    );
  };

  const toggleExperienceEdit = (index) => {
    setExperienceList((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        if (
          !item.company ||
          !item.position ||
          !item.responsibilities ||
          !item.to ||
          !item.from
        ) {
          alert("Please fill all the fields");
          return item;
        }

        return { ...item, isEditing: !item.isEditing };
      }),
    );
  };
  return (
    <div className="app">
      <div className="form-section">
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <Education
          educationList={educationList}
          setEducationList={setEducationList}
          addEducation={addEducation}
          handleDelete={handleDelete}
          toggleEdit={toggleEdit}
        />
        <Experience
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
          toggleExperienceEdit={toggleExperienceEdit}
        />
      </div>

      <div className="preview-section">
        <CvPreview
          generalInfo={generalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </div>
  );
}

export default App;
