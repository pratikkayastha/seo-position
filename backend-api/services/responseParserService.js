const searchResultRegex = /<div class="g"(.*)<\/a>/g;

/**
	Parses HTML response from google and searches for the domain
	Returns positions for occurance of the domain
*/
module.exports.locateDomain = (rawHtml, domain) => {
	if (!rawHtml || !domain) {
		return null;
	}

	console.log(`Locating ${domain} in raw HTML...`);

	let matches = rawHtml.match(searchResultRegex), matchPositions = [];

	if (matches==null || matches.length<1) {
		return matchPositions;
	}

	matches.forEach((match, position) => {
		if (match.indexOf(domain)>-1) {
			matchPositions.push(position);
		}
	});
	
	return matchPositions;
}