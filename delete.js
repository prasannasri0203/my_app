const logger = require("./wiston_logger");

var AWS = require('aws-sdk');

var dynamoDB = new AWS.DynamoDB({
  region: "us-east-1",
  accessKeyId: "AKIARYTO5EFJ7K6AZEU5",
  secretAccessKey: "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",  
});




function deleteCustomer(req,res) {
  try{
    var params = {
      Key: {
        "CUSTOMER_ID": {
          "N": "1"
        },
        "CUSTOMER_NAME": {
          "S": "PRASANNA1"
        }
      },
      TableName: "CUSTOMER_LIST",
  };
  
  dynamoDB.deleteItem(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  });
  }catch(error){
    console.log("eeee",error);
    logger.info("get service method error");
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
  }
}

module.exports = {
  deleteCustomer
};

