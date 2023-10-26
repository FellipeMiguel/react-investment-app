import React from "react";

import "./style.css";

const Table = (props) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

// use like this:
	formatter.format();

	return (
		<table className="result">
			<thead>
			<tr>
				<th>Year</th>
				<th>Total Savings</th>
				<th>Interest (Year)</th>
				<th>Total Interest</th>
				<th>Invested Capital</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td>YEAR NUMBER</td>
				<td>TOTAL SAVINGS END OF YEAR</td>
				<td>INTEREST GAINED IN YEAR</td>
				<td>TOTAL INTEREST GAINED</td>
				<td>TOTAL INVESTED CAPITAL</td>
			</tr>
			</tbody>
		</table>
	)
};

export default Table;