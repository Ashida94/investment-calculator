import {calculateInvestmentResults, formatter} from '../util/investment';

export default function Table({initialInvestment, annualInvestment, expectedReturn, duration}){
    const data = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration}); 
    console.log(data);
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Year</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>   
                </tr>
            </thead>
            <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.totalInterest)}</td>
                    <td>{formatter.format(item.valueEndOfYear - item.totalInterest)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}