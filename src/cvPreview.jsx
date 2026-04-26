export default function CvPreview({ generalInfo, educationList }) {
  return (
    <>
      <h2>CV Preview</h2>
      <div>
        <p>Name:{generalInfo.name}</p>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>

      {educationList.map((edu, index) => (
        <div key={index}>
          <p>{edu.school}</p>
          <p>{edu.degree}</p>
          <p>{edu.date}</p>
        </div>
      ))}
    </>
  );
}
