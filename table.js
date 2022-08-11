const AWS = require("aws-sdk")
const dynamoDB = new AWS.DynamoDB({ 
  region: "us-east-1",
  accessKeyId: "AKIARYTO5EFJ7K6AZEU5",
  secretAccessKey: "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",  
})

function createTable() {
  const params = {
    TableName: "registration",
    AttributeDefinitions: [
      {
        AttributeName: 'CUSTOMER_ID',
        AttributeType: 'N'
      },
      {
        AttributeName: 'CUSTOMER_NAME',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'CUSTOMER_ID',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'CUSTOMER_NAME',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1
    },
    TableName: 'CUSTOMER_LIST'
  };

  dynamoDB.createTable(params, function(err, data) {
    if (err) {
      console.error("Unable to create table", err);
    } else {
      console.log("Created table", data);
    }
  });
}

module.exports = {
  createTable
};