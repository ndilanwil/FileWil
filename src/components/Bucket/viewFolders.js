import * as AWS from 'aws-sdk'
import { useState } from "react"

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();


export default function ViewFolders(path){
  const [folders, setFolders] = useState([])  

    var params = {
        Bucket: 'dropbox43', /* required */
        Prefix: path
      };
      s3.listObjectsV2(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{
            let array = []
            data.Contents.map(element => {
              array.push(element.Key.split(path)[1])
            })
            array.shift()
            if(array.length>0){
              array = array.filter(index => index.endsWith('/'));
            }
            setFolders(array)
        }     
      });
      return folders
}