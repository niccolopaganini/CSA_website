import React, { useState } from 'react';
import './FormComponent.css'; // Import the CSS file for styling

const FormComponent = () => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [Nationality, setNationality] = useState('choose');
  const [aadharNo, setAadharNo] = useState('');
  const [sportType, setSportType] = useState('choose');
  const [specificField, setSpecificField] = useState('');
  

  const toggleSpecificFieldNationality = () => {
    const selectedNationality = document.getElementById("Nationality").value;
  
    // Reset specific field
    setAadharNo('');
  
    if (selectedNationality === "indian" || selectedNationality === "other") {
      setAadharNo('');
    }
  };
  
    
  const toggleSpecificFieldSportType = () => {
    // Implement logic to toggle specific field based on sport type
    setSpecificField(''); // Reset specific field when sport type changes
  };

  const submitForm = (event) => {
    event.preventDefault();
    // Implement logic to handle form submission
    console.log({
      studentName,
      parentName,
      dob,
      address,
      email,
      phone,
      // nationality,
      aadharNo,
      sportType,
      specificField,
      Nationality
    });
  };

  const renderSpecificFields = () => {
    switch (sportType) {
      case 'archery':
        return (
          <div>
            <label htmlFor="archeryType">Archery Type:</label>
            <select
              id="archeryType"
              value={specificField}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="indian">Indian</option>
              <option value="compound">Compound Target</option>
              <option value="olympic">Olympic Recurve</option>
            </select>
          </div>
        );
      case 'gunShooting':
        return (
          <div>
            <label htmlFor="gunShootingType">Gun Shooting Type:</label>
            <select
              id="gunShootingType"
              value={specificField}
              onChange={(e) => setSpecificField(e.target.value)}
            >
              <option value="openSight">Open Sight Rifle (0.177)</option>
              <option value="rifle">Rifle (Peep Sight 0.177)</option>
              <option value="pistol">Pistol</option>
            </select>
          </div>
        );
      case 'martialArts':
        return (
          <div>
            <label htmlFor="martialArtsType">Martial Arts Type:</label>
            <select
              id="martialArtsType"
              value={specificField}
              onChange={(e) => setSpecificField(e.target.value)}
            >
              <option value="wushu">Wushu</option>
              <option value="vovinan">Vovinan</option>
              <option value="sanda">Sanda</option>
              <option value="talou">Talou</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  const renderSpecificFieldsforNationality = () => {
    switch (Nationality) {
        case 'indian':
            return (
                <div>
                <label htmlFor="aadharNumber">Enter your Aadhar Number:</label>
                <input type="number" id="aadharNumber" value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} required maxLength= "12" />
                </div>
            );

        case 'other':
            return (
                <div>
                    <label htmlFor="otherText">Enter your Nationality:</label>
                    <input type="text" id="aadharNumber" value={aadharNo} onChange={(e) => setAadharNo(e.target.value)} required />
                </div>
            )
      default:
        return null;
    }
  };

  return (
    <form onSubmit={submitForm} className="form-container">
      <div>
        <label htmlFor="studentName">Student Name:</label>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="parentName">Parent/ Guardian Name:</label>
        <input
          type="text"
          id="parentName"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          maxLength="10"
        />
      </div>
      <div>
      <label htmlFor="Nationality">Enter Your Nationality:</label>
        <select
          id="Nationality"
          value={Nationality}
          onChange={(e) => setNationality(e.target.value)}
          onBlur={toggleSpecificFieldNationality}
        >
          <option value="choose">Choose</option>
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </select>
      </div>
        {renderSpecificFieldsforNationality()}
      <div>
        <label htmlFor="sportType">Sport Type:</label>
        <select
          id="sportType"
          value={sportType}
          onChange={(e) => setSportType(e.target.value)}
          onBlur={toggleSpecificFieldSportType}
        >
          <option value="choose">Choose</option>
          <option value="archery">Archery</option>
          <option value="gunShooting">Gun Shooting</option>
          <option value="martialArts">Martial Arts</option>
        </select>
      </div>
      {renderSpecificFields()}
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FormComponent;
