export async function POST(request: Request) {
	// Extract the query parameter "amount" from the request URL
	const url = new URL(request.url);
	const amount = Number(url.searchParams.get('amount'));

	let result;
	// Apply the logic to calculate the output money value
	if (amount >= 0 && amount < 500) {
		result = 199;
	} else if (amount >= 500 && amount < 2500) {
		result = 249;
	} else if (amount >= 2500) {
		// Calculate 12% of the amount
		const twelvePercent = amount * 0.12;
		// Ensure the result does not exceed 1500
		result = twelvePercent > 1500 ? 1500 : twelvePercent;
	} else {
		// Handle cases where the amount is not a valid number
		return new Response(JSON.stringify({ error: 'Invalid amount' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	// Generate a unique Variable Symbol code for payments
	// This is a simplistic approach. In a real application, ensure this meets your uniqueness requirements.
	const variableSymbol = 'VS' + Date.now();

	// Return the calculated result and the Variable Symbol code
	return new Response(
		JSON.stringify({ result, variableSymbol }),
		{
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		}
	);
}