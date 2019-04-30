Domain Position Resolver Backend API
=======================
Resolves position of a domain in Google Search results for a certain keyword within first 10 pages of google search results.

The app accepts a GET request to /api/seoposition with keyword and domain parameter.

Example Request
`GET /api/seoposition?keyword=cat&domain=catfoods.com.au`
Example Response
`{"keyword":"cat","domain":"catfoods.com.au","position":[6,16,56,63]}`

Use positionResolverService.resolvePosition to run the app on blocking mode i.e. sends requests to Google one after another while positionResolverService.resolvePositionParallelly sends request asynchronously.

### How to Run
Run the following in command prompt
`npm run`
This will run the app in 8080 port.

Run the following in command prompt to run tests
`npm test`

