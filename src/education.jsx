export default function Education({
  setEducationList,
  educationList,
  addEducation,
}) {
  const handleChange = (index, field) => (evnt) => {
    setEducationList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: evnt.target.value } : item,
      ),
    );
  };

  return (
    <div>
      <h3>Education</h3>
      {educationList.map((edu, index) => (
        <div key={index}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            value={edu.school}
            onChange={handleChange(index, "school")}
          />

          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={edu.degree}
            onChange={handleChange(index, "degree")}
          />

          <label htmlFor="phone">Date</label>
          <input
            type="date"
            value={edu.date}
            placeholder="DD/MM/YYYY"
            onChange={handleChange(index, "date")}
          />
        </div>
      ))}

      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}
