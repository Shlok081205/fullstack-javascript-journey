import { useState } from "react";

function Form3() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
    gender: "male",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Data Submitted:\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Password: ${formData.password}\n` +
        `Message: ${formData.message}\n` +
        `Gender: ${formData.gender}\n` +
        `City: ${formData.city}`,
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Contact Form</h1>

      <form onSubmit={handleSubmit} style={{ fontFamily: "sans-serif" }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            Gender:
          </label>
          <div style={{ display: "flex" }}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBlockEnd: "5px" }}>
            City:
          </label>
          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select a city</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <option value="Paris">Paris</option>
            <option value="Tokyo">Tokyo</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            background: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form3;
