import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

export default function createUserFolder(name){
    console.log("yeah")
    s3.putObject({
      Bucket: 'dropbox43',
      Key: `${name}/`,
      Body: ''
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Folder created successfully.');
        }
    });
}