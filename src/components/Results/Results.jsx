import { calculateInvestmentResults, formatter } from '../../util/investment';
import './Results.css';

function Results({ userInput }) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
      <table id="result">
          <thead>
            <tr>
                <th>Year</th>
                <th>Initial Investment</th>
                <th>Interest</th>
                <th>Total Investment</th>
                <th>Capital</th>
            </tr>
          </thead>
          <tbody>
          {resultsData.map(yearData => {
            const totalInterest =
                yearData.valueEndOfYear -
                yearData.annualInvestment *
                yearData.year -
                initialInvestment;

            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

            return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            )
          })}
          </tbody>
      </table>
    );
}

export default Results;
