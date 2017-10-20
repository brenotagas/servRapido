var express = require('express');
var app = express();
var data = require('./breno.json');

//... your code here ...

app.get('/',(req,res)=>{
    res.send(data);
});

                                
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});