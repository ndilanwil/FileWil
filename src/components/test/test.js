import AWS from 'aws-sdk';
import { useState } from 'react';
import {
    S3Client,
    // This command supersedes the ListObjectsCommand and is the recommended way to list objects.
    ListObjectsV2Command,
  } from "@aws-sdk/client-s3";
  
const client = new S3Client({});

AWS.config.update({
  accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
  secretAccessKey: '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',
  region: 'us-east-1',
  signatureVersion: 'v4',
});

export default function ImageUploader() {
  const s3 = new AWS.S3();
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  }

  const uploadToS3 = async () => {
    if (!file) {
      return;
    }
    const params = { 
      Bucket: 'dropbox43', 
      Key: `${Date.now()}.${file.name}`, 
      Body: file 
    };
    const { Location } = await s3.upload(params).promise();
    setImageUrl(Location);
    console.log('uploading to s3', Location);
    }
    const main = async () => {
        var params = {
            Bucket: 'dropbox43', /* required */
            Prefix: 'test/'
          };
          s3.listObjectsV2(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data.Contents);           // successful response
          });
      };
      // const main = async () => {
      //   var params = {
      //     Bucket: 'dropbox43',
      //     Key: 'test/your-file-name',
      //     Body: 'your-file-content'
      //   };
        
      //   s3.putObject(params, function(err, data) {
      //     if (err) {
      //       return 'There was an error viewing your album: ' + err.message
      //     } else {
      //       console.log('File uploaded successfully');
      //     }
      //   })
      //   };
    //   const main = async () => {
    //     const bucketName = 'dropbox43';
    //     const key = 'img5.jpg';
    //     const url = s3.getSignedUrl('getObject', {
    //         Bucket: bucketName,
    //         Key: key, // optional, default is 900 seconds (15 minutes)
    //     });
        
    //     console.log('URL:', url);
    //   };
  return (
    <div >
      {/* <h1>Test Image Upload</h1>
      <input type="file" onChange={handleFileSelect} />
      {file && (
        <div style={{ marginTop: '10px' }}>
          <button onClick={main}>Upload</button>
        </div>
      )}
      {imageUrl && (
        <div style={{ marginTop: '10px' }}>
          <img src={imageUrl} alt="uploaded" />
        </div>
      )} */}
    </div>
  );
}