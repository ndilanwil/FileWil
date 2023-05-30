import * as AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: 'AKIA3EKG4OOOMCL6PNMR',
    secretAccessKey: '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',
    region: 'us-east-1',
    signatureVersion: 'v4',
});

const docClient = new AWS.DynamoDB.DocumentClient()
// const //BASE_URL = 'https://i4v6onpxw7ufhmvgc63wvu62oq0mdslc.lambda-url.us-east-1.on.aws/';
// return axios.post(`${BASE_URL}/register`, { username, email, password });
export default function register(user,em, pass) {
    console.log("test")
        let params = {
            TableName: "users",
            Item: {
                username: user,
                email: em,
                password: pass
            }
        };

        docClient.put(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)
            }
        });
}