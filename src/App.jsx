import { useState } from "react"
import Header from "./components/Header/Header";
import Section from "./components/Section/Section.jsx";
import UserInputs from "./components/UserInputs/UserInputs.jsx";
import Results from "./components/Results/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentificator, inputValue) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentificator]: inputValue,
            }
        });
    }

    return (
        <>
            <Header/>
            <Section id="user-input">
                <UserInputs
                    userInput={userInput}
                    onChange={handleChange}
                />
            </Section>
            <Results
                userInput={userInput}
            />
        </>
    );
}

export default App
