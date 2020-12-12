const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080


 // for serving all the normal html
app.use( express.static('public') )
// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/*', function (req, res) {
    console.log( `[/*] (${req.protocol}//${req.get('host')}/${req.originalUrl} -- sending file: ${__dirname}/public/index.html` );
    res.sendFile(`${__dirname}/public/index.html`);
 });
 

app.listen(PORT, function() {
    console.log( `Serving app at: http://localhost:${PORT}` )
})
