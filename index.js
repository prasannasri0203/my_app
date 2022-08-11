const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const {createTable} = require("./table");
const {addCustomer,scanCustomer,getCustomer,batchGetItem,updateCustomer} = require("./crud");
const {deleteCustomer} = require("./delete");



//read the json data from API
app.use(express.json());
//extended the request data from API
app.use(bodyParser.urlencoded({ extended: true }));
console.log("table",);
app.use('/aws/table', createTable);
app.post('/aws/add', addCustomer);
app.get('/aws/scan', scanCustomer);
app.get('/aws/get/:id', getCustomer);
app.get('/aws/gets', batchGetItem);
app.get('/aws/delete/:id', deleteCustomer);
app.put('/aws/update/:id', updateCustomer);
//port number
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

