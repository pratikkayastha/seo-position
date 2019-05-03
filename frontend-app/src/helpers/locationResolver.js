const BACKEND_API_URL = "http://localhost:8080/api/seoposition";

/**
	Sends request to backend to resolve position
	Returns null in case of an error and returns an array of integer if successful
	Currently, catches all errors; could check response.ok or response.statusCode
	for better error handling
*/
export const resolvePosition = async (keyword, domain) => {
	let positions = null;

	try {
		const response = await fetch(`${BACKEND_API_URL}?keyword=${keyword}&domain=${domain}`);
		const positionResponse = await response.json();
		
		positions = positionResponse.positions;
	} catch (ex) {
		console.log("Error while trying to fetch positions from backend!");
		console.log(ex);
	}

	return positions;
}