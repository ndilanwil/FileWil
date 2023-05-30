import * as AWS from 'aws-sdk'
import { useState } from "react"

AWS.config.update({
    accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
    secretAccessKey: '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',
    region: 'us-east-1',
    signatureVersion: 'v4',
});

const docClient = new AWS.DynamoDB.DocumentClient()
// const BASE_URL = 'https://i4v6onpxw7ufhmvgc63wvu62oq0mdslc.lambda-url.us-east-1.on.aws/';
// return axios.post(`${BASE_URL}/login`, { username, password });

export default function Log(username, password) {
      const [toReturn, setToReturn] = useState(false)
      let params = {
          TableName: "users"
      };

      docClient.scan(params, function(err, data) {
      if (err) {
          console.log(err);
      } else {
          if(data.Items.find(element => element.username===username && element.password === password)!=null){
            setToReturn(true)
          }
          else{

          }
      }
      }); 
      return toReturn
}