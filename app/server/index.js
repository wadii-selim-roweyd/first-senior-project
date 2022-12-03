const express = require ("express");
const cors = require ("cors");
const app = express ();

app.use (cors ());
const port =5000;
app.use(express.json());
app.use(express.static(__dirname+"/../client/dist"));














app.listen(port,()=>{console.log('listening on http://localhost:'+port)});
