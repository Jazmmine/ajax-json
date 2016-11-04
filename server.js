var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.listen(80); //podemos poner el mismo numero del proyecto anterior, pero los dos no tienen que estar encedidos


