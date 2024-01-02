import Header from "./components/Header/Header";
import Section from "./components/Section/Section.jsx";
import UserInputs from "./components/UserInputs/UserInputs.jsx";

function App() {
  return (
      <>
        <Header />
        <Section id="user-input">
          <UserInputs/>
        </Section>
      </>
  );
}

export default App
