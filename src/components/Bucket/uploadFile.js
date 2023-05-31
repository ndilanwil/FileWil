import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

export default function uploadFile(path,file, name){
    const params = {
        Bucket: "dropbox43",
        Key: path + name, // Include the folder path in the Key property
        Body: file,
      };
  
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
      });
}