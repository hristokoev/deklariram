function calculateTaxes(bruttoSalary: number, paidTaxes: number, paidBonus: number, numberOfMonths: number): number {
	// Step 2: Round brutto to the nearest 100
	const roundedBrutto = Math.round(bruttoSalary / 100) * 100;
	
	// Step 3: Determine the tax rate and calculate the tax
	const taxRate = roundedBrutto > 1935522 ? 0.23 : 0.15;
	const calculatedTax = roundedBrutto * taxRate;
	
	// Step 5: Calculate the additional amount based on the number of months
	const taxDiscountTotal = numberOfMonths * 2570;
	
	// Step 6: Subtract the additional amount from the calculated tax
	const afterSubtraction = calculatedTax - taxDiscountTotal;
	
	// Step 7: Subtract the result from the paid taxes
	let result = afterSubtraction - paidTaxes ? afterSubtraction - paidTaxes : 0;
	
	// If there's a paid bonus, subtract it from the result
	result += paidBonus;
	
	return result;
}

export default calculateTaxes;