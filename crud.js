const logger = require("./wiston_logger");

const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1", // replace with your region in AWS account
  accessKeyId: "AKIARYTO5EFJ7K6AZEU5",
  secretAccessKey: "qc7bYwg2zvCviC4eyxZFKjIKCNdg/9wF2bBL+hFF",  
});

const dynamoDB = new AWS.DynamoDB();

function queryData(req,res){
  try{
    var params = {
      TableName: 'CUSTOMER_LIST',
      Item: {
        'CUSTOMER_ID' : {N: req.body.CUSTOMER_ID},
        'CUSTOMER_NAME' : {S: req.body.CUSTOMER_NAME}
      }
    };
    dynamoDB.putItem(params, function(err, data) {
      if (err) {
         return res.status(500).send(err)
      } else {
        res.status(200).send("success");
      }
    });
  }catch(error){
    logger.info("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});

  }
}

function addCustomer(req,res) {
  try{
    var params = {
      TableName: 'CUSTOMER_LIST',
      Item: {
        'CUSTOMER_ID' : {N: req.body.CUSTOMER_ID},
        'CUSTOMER_NAME' : {S: req.body.CUSTOMER_NAME}
      }
    };
    dynamoDB.putItem(params, function(err, data) {
      if (err) {
         return res.status(500).send(err)
      } else {
        res.status(200).send("success");
      }
    });
  }catch(error){
    logger.info("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});

  }
}

function scanCustomer(req,res,error) {
  try{
    var params = {
      TableName: 'CUSTOMER_LIST',
    };
    dynamoDB.scan(params, function(err,data) {
      if (err) {
         return res.status(500).send("Error!")
      }else{
        return res.status(200).send(data)
      }
    });
  }catch(error){
    logger.info("scan service method error");
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
  }
}
function getCustomer(req,res) {
  try{
    const params = {
      TableName: "CUSTOMER_LIST",
      Key: {
        "CUSTOMER_ID": {
          "N": "2"
        },
        "CUSTOMER_NAME": {
          "S": "data"
        }
      }
    }
  
    dynamoDB.getItem(params, function(err, data) {
      if (err) {
        return res.status(500).send("Error!")
      } else {
        return res.status(200).send(data.Item)
      }
    });
  }catch(error){
    console.log("eeee",error);
    logger.info("get service method error");
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
  }
}

function deleteCustomer(req,res) {
  try{

    const AWS = require("aws-sdk");
    AWS.config.update({
      region: "us-east-1",
      accessKeyId: "AKIARYTO5EFJ7K6AZEU5",
      secretAccessKey: "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", 
    });

    const dynamoDB = new AWS.DynamoDB();
    const params = {
      TableName: "CUSTOMER_LIST",
      Key: {
        CUSTOMER_ID: { N: 1 },
      },
    };
  
    dynamoDB.deleteItem(params, function(err) {
      if (err) {
        console.error("Unable to find movie", err);
      } else {
        console.log(`Deleted ${title}`);
      }
    });
  }catch(error){
    console.log("eeee",error);
    logger.info("get service method error");
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
  }
}

function updateCustomer(req,res){

  var AWS = require("aws-sdk");
  AWS.config.update({
    region: "us-east-1", // replace with your region in AWS account
    accessKeyId: "AKIARYTO5EFJ7K6AZEU5",
    secretAccessKey: "qc7bYwg2zvCviC4eyxZFKjIKCNdg/9wF2bBL+hFF",  
  });

  try{
    var params = {
        TableName: 'CUSTOMER_LIST',
        Key: {
          "CUSTOMER_ID":  "3",
          "CUSTOMER_NAME": "test1"
         },
        UpdateExpression: 'set #CUSTOMER_NAME = :CUSTOMER_NAME ',
        ConditionExpression: '#CUSTOMER_NAME = :CUSTOMER_ID',
        ExpressionAttributeNames: { '#CUSTOMER_NAME': 'CUSTOMER_NAME' },
        ExpressionAttributeValues: { ':CUSTOMER_NAME': '40', ':CUSTOMER_ID': '30' }
    };

    var docClient = new AWS.DynamoDB.DocumentClient();

    docClient.update(params, function (err, data) {
        if (err) {
            console.log(err);
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

function batchGetItem(req,res) {
  try{
    dynamoDB
  .batchGet({
    RequestItems: {
      "my-table": {
        Keys: [
          {
            id: "123",
          },
          {
            id: "124",
          },
        ],
      },
      "other-table": {
        Keys: [
          {
            id: "abc",
          },
          {
            id: "abd",
          },
        ],
      },
    },
  })
  .promise()
  .then(data => console.log(data.Responses))
  .catch(console.error)
  }catch(error){
    console.log("eeee",error);
    logger.info("get service method error");
    // global.logger.error("add service method",{time:new Date().toString(),errMessages:JSON.stringify(error,null,2)});
  }
}


module.exports = {
  addCustomer,
  scanCustomer,
  getCustomer,
  batchGetItem,
  deleteCustomer,
  updateCustomer
};

