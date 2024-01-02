import { useState } from "react";
import './UserInputs.css';

function UserInputs() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })

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
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) => handleChange('initialInvestment', e.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) => handleChange('annualInvestment', e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) => handleChange('expectedReturn', e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(e) => handleChange('duration', e.target.value)}
                    />
                </p>
            </div>
        </>
    )
}

export default UserInputs;
