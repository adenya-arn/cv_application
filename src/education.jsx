export default function Education({
  setEducationList,
  educationList,
  addEducation,
  handleDelete,
  toggleEdit,
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
        <div key={edu.id}>
          {edu.isEditing ? (
            <>
              <label htmlFor="school">School</label>
              <input
                type="text"
                id={`school-${index}`}
                value={edu.school}
                onChange={handleChange(index, "school")}
              />
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id={`degree-${index}`}
                value={edu.degree}
                onChange={handleChange(index, "degree")}
              />
              <label htmlFor="date">Date</label>
              <input
                id={`date-${index}`}
                type="date"
                value={edu.date}
                placeholder="DD/MM/YYYY"
                onChange={handleChange(index, "date")}
              />
              <button onClick={() => toggleEdit(index)}>Submit</button>
            </>
          ) : (
            <>
              {" "}
              <p>{edu.school}</p>
              <p>{edu.degree}</p>
              <p>{edu.date}</p>
              <button onClick={() => toggleEdit(index)}>Edit</button>
            </>
          )}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}

      <button onClick={addEducation}>Add Education</button>
    </div>
  );
}
