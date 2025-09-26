import { usePersonVM } from "../viewmodel/personVM";
import  "./person.scss"
const PersonInfo = () => { 
  const { person, handleInputChange, submitForm } = usePersonVM();

return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={person.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={person.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
        />
      </div>
      <div>
        <label>Id Number:</label>
        <input
          type="text"
          value={person.idNumber}
          onChange={(e) => handleInputChange("idNumber", e.target.value)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          value={person.gender}
          onChange={(e) => handleInputChange("gender", e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonInfo;