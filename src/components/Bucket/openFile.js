import * as AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

const s3 = new AWS.S3();

export default function openFile(path, name){
    const bucketName = 'dropbox43';
    const key = path + name;
    const url = s3.getSignedUrl('getObject', {
        Bucket: bucketName,
        Key: key, // optional, default is 900 seconds (15 minutes)
    });
        console.log('URL:', url);
        window.open(url, '_blank');
}