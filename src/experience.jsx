export default function Experience({
  experienceList,
  setExperienceList,
  addExperience,
  deleteExperience,
  toggleExperienceEdit,
}) {
  const handleChange = (index, field) => (e) => {
    setExperienceList((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, [field]: e.target.value } : item,
      ),
    );
  };

  return (
    <div>
      <h3>Experience</h3>

      {experienceList.map((exp, index) => (
        <div key={exp.id} className="card">
          {exp.isEditing ? (
            <>
              <input
                placeholder="Company"
                value={exp.company}
                onChange={handleChange(index, "company")}
              />

              <input
                placeholder="Position"
                value={exp.position}
                onChange={handleChange(index, "position")}
              />

              <input
                placeholder="Responsibilities"
                value={exp.responsibilities}
                onChange={handleChange(index, "responsibilities")}
              />

              <input
                type="date"
                value={exp.from}
                onChange={handleChange(index, "from")}
              />

              <input
                type="date"
                value={exp.to}
                onChange={handleChange(index, "to")}
              />

              <button onClick={() => toggleExperienceEdit(index)}>
                Submit
              </button>
            </>
          ) : (
            <>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
              <p>{exp.responsibilities}</p>
              <p>
                {exp.from} - {exp.to}
              </p>

              <button onClick={() => toggleExperienceEdit(index)}>Edit</button>
            </>
          )}

          <button onClick={() => deleteExperience(index)}>Delete</button>
        </div>
      ))}

      <button onClick={addExperience}>Add Experience</button>
    </div>
  );
}
