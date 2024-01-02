import './UserInputs.css';

function UserInputs() {
    return (
        <>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required/>
                </p>
            </div>
        </>
    )
}

export default UserInputs;
