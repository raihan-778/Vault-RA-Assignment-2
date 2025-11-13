import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./vaultContainer/Form";
import VaultContainer from "./vaultContainer/VaultContainer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Form />
        <VaultContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
