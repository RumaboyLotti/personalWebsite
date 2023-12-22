// ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can send the form data to your server or perform other actions
  };

//   return (
//     // <form onSubmit={handleSubmit}>
//     //   <label>
//     //     Name:
//     //     <input
//     //       type="text"
//     //       name="name"
//     //       value={formData.name}
//     //       onChange={handleChange}
//     //     />
//     //   </label>
//     //   <label>
//     //     Email:
//     //     <input
//     //       type="email"
//     //       name="email"
//     //       value={formData.email}
//     //       onChange={handleChange}
//     //     />
//     //   </label>
//     //   <label>
//     //     Message:
//     //     <textarea
//     //       name="message"
//     //       value={formData.message}
//     //       onChange={handleChange}
//     //     />
//     //   </label>
//     //   <button type="submit">Submit</button>
//     // </form>
//   );
};

export default ContactForm;
