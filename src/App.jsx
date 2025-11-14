import { useState } from "react";
import "./App.css";
import AuthForm from "./AuthForm";
import Footer from "./Footer";
import Header from "./Header";
import VaultContainer from "./vaultContainer/VaultContainer";
import { defaultbookMarks } from "/src/assets/defaultBookMarks.js";

function App() {
  const [bookMarkData, setBookMarkData] = useState(defaultbookMarks);

  // const [formData, setFormData] = useState(defaultFomData);

  console.log(defaultbookMarks);
  function handleSubmit(newBoomarkData, validateFormField) {
    const newErrors = {};

    Object.keys(newBoomarkData).forEach((key) => {
      newErrors[key] = validateFormField(key, newBoomarkData[key]);
    });

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      alert("Form submission failed due to validation errors:", newErrors);
    } else {
      console.log("handlesubmit clicked");
      alert("Form submitted successfully!");

      setBookMarkData([...bookMarkData, newBoomarkData]);
    }
  }

  // const defaultbookmark = {
  //   url: "Facebook.com",
  //   color: "#1877F2",
  //   category: "Social",
  //   username: "Raihan_778",
  //   password: "123456",
  // };

  return (
    <>
      <div>
        <Header />
        <AuthForm handleSubmitForm={handleSubmit} />
        <VaultContainer bookMarkData={bookMarkData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
