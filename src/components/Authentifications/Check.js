import * as AWS from 'aws-sdk'
import { useState } from "react"

AWS.config.update({
    accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
    secretAccessKey: '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',
    region: 'us-east-1',
    signatureVersion: 'v4',
});

const docClient = new AWS.DynamoDB.DocumentClient()

export default function Check(username, email) {
      const [toReturn, setToReturn] = useState(false)
      let params = {
          TableName: "users"
      };

      docClient.scan(params, function(err, data) {
      if (err) {
          console.log(err);
      } else {
          if(data.Items.find(element => element.username===username || element.email === email)!=null){
            setToReturn(true)
          }
          else{

          }
      }
      }); 
      return toReturn
}