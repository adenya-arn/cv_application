export default function CvPreview({
  generalInfo,
  educationList,
  experienceList,
}) {
  return (
    <>
      <h2>CV Preview</h2>
      <h3>General Info</h3>
      <div>
        <p>Name:{generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>

      <h3>Education</h3>
      {educationList.map((edu, index) => (
        <div key={index}>
          <p>School:{edu.school}</p>
          <p>Degree:{edu.degree}</p>
          <p>Date:{edu.date}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {experienceList.map((exp, index) => (
        <div key={index}>
          <p>Company:{exp.company}</p>
          <p>Position:{exp.position}</p>
          <p>Responsibilities:{exp.responsibilities}</p>
          <p>
            Dates:{exp.from} - {exp.to}
          </p>
        </div>
      ))}
    </>
  );
}
