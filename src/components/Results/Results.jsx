import { calculateInvestmentResults } from '../../util/investment';
import './Results.css';

function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);

    return <p>Results...</p>
}

export default Results;
