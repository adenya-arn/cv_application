export default function GeneralInfo({
  generalInfo,
  setGeneralInfo,
  isEditing,
  setIsEditing,
}) {
  const handleChange = (field) => (evnt) => {
    setGeneralInfo((prev) => ({
      ...prev,
      [field]: evnt.target.value,
    }));
  };

  return (
    <div>
      {isEditing ? (
        <>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={generalInfo.name}
            onChange={handleChange("name")}
          />
          <label htmlFor="email">Email</label>
          <input
            placeholder="example@mail.com"
            type="email"
            id="email"
            value={generalInfo.email}
            onChange={handleChange("email")}
          />
          <label htmlFor="phone">Phone</label>
          <input
            placeholder=" +2547123..."
            type="number"
            id="phone"
            value={generalInfo.phone}
            onChange={handleChange("phone")}
          />
        </>
      ) : (
        <>
          <p>Name:{generalInfo.name}</p>
          <p>Email :{generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
