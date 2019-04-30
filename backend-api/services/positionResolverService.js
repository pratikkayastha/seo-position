const { locateDomain } = require('./responseParserService');
const { fetchRawHtml } = require('./googleApiService');

/**
	Resolves position of domain; sends request to google one by one(Blocking)
	Looks for the domain upto 10 pages
*/
module.exports.resolvePosition = async (keyword, domain) => {
	console.log(`Resolving position of ${domain} for ${keyword}`);
	
	let positions = [];

	for (let page=0; page<10; page++) {
		const rawHtml = await fetchRawHtml(keyword, (page*10));
		if (rawHtml==null) {
			return null;
		}

		positions.push(...locateDomain(rawHtml, domain).map(pos => pos + (page*10)));
	}

	return positions;
};

/**
	Resolves position of domain; sends request to google all at once
	Looks for the domain upto 10 pages
*/
module.exports.resolvePositionParallelly = async (keyword, domain) => {
	console.log(`Resolving position parallelly of ${domain} for ${keyword}`);

	let requestPromises = [];
	Array.from(Array(10).keys()).forEach((page) => {
		requestPromises.push(fetchRawHtml(keyword, (page*10)));
	});

	return await Promise.all(requestPromises).then((rawHtmlValues) => {
		let positions = [];
		rawHtmlValues.forEach((rawHtml, page) => {
			positions.push(...locateDomain(rawHtml, domain).map(pos => pos + (page*10)));
		});

		return positions;
	});
}