const cities = require('cities')
const url = require('url')
const http = require('http')
const app = http.createServer( (req, res) => {
	let city, query
	query = url.parse(req.url, true).query
	if (query.zipCode) city = cities.zip_lookup(query.zipCode).city
	else city = "Not Found"

	res.writeHead(200, {"Content-Type": "text/html"})
	res.write(`<h1>The city you are in is ${city}.</h1>`)
	res.end()
})

app.listen(3000)

setInterval( () => console.log('Server running...'), 30000)