const request = require('request');

/**
	Sends GET request to google.com.au/search with keyword and start param
*/
module.exports.fetchRawHtml = (keyword, offset) => {
	return new Promise((resolve, reject) => {
		if (!keyword || offset==null) {
			reject(new Error('Invalid params!'));
			return;
		}

		console.log(`Fetching raw HTML from google.com.au for ${keyword}`);

		request(`https://www.google.com.au/search?q=${keyword}&start=${offset}`, (err, res, body) => {
		
			if (err!=null || res.statusCode!==200 || body==null) {
				reject(new Error(`Google did not return 200; returned ${res.statusCode}`));
				return;
			}

			resolve(body);
		});
	});
}