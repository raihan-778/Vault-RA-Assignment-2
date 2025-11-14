import { useState } from "react";
import "./App.css";
import AuthForm from "./AuthForm";
import Footer from "./Footer";
import Header from "./Header";
import VaultContainer from "./vaultContainer/VaultContainer";
import { defaultbookMarks } from "/src/assets/defaultBookMarks.js";

function App() {
  const [bookMarkData, setBookMarkData] = useState(defaultbookMarks);

  console.log(defaultbookMarks);
  function handleSubmit(
    newBoomarkData,
    validateFormField,
    setTouched,
    setInputErrors
  ) {
    const newErrors = {};
    const allTouched = {};

    Object.keys(newBoomarkData).forEach((key) => {
      allTouched[key] = true;
      newErrors[key] = validateFormField(key, newBoomarkData[key]);
    });

    setTouched(allTouched);
    setInputErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      console.log("Form submitted successfully:", newBoomarkData);
      alert("Form submitted successfully!");
    }
    console.log("handlesubmit clicked");

    setBookMarkData([...bookMarkData, newBoomarkData]);
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
