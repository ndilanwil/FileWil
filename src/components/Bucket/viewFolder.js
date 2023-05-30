import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();


export default function viewFolder(name){

    var params = {
        Bucket: 'dropbox43', /* required */
        Prefix: name
      };
      s3.listObjectsV2(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{
            console.log(data.Contents);
            let array = []
            data.Contents.map(element => array.push(element.Key.split(name)[1]))
            array.shift()
            console.log(array)
        }     
      });
}