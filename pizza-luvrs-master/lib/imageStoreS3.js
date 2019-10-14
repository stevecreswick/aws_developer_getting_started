const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports.save = (name, data) => {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: "pluralsight-aws-developer-class-sc",
      Key: `pizzas/${name}.png`,
      Body: Buffer.from(data, "base64"),
      ContentEncoding: "base64",
      ContentType: "image/png"
    };

    s3.putObject(parms, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(
          `//pluralsight-aws-developer-class-sc.s3-us-west-2.amazonaws.com/${params.Key}`
        );
      }
    });
  });
};
