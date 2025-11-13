import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import AuthForm from "./vaultContainer/AuthForm";
import VaultContainer from "./vaultContainer/VaultContainer";

import { bookMarkcards } from "./assets/bookmarkData";

function App() {
  // const defaultbookmark = {
  //   url: "Facebook.com",
  //   color: "#1877F2",
  //   category: "Social",
  //   username: "Raihan_778",
  //   password: "123456",
  // };
  const [bookMark, setBookMark] = useState(bookMarkcards);

  function onSubmit(formData) {
    console.log("submited bookmark", bookMark);
    setBookMark(formData);
  }

  return (
    <>
      <div>
        <Header />
        <AuthForm handleSubmitForm={onSubmit} />
        <VaultContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
