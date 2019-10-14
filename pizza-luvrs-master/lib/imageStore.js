const fileStore = require("./imageStoreFile");
const s3Store = require(".imageStoreS3");

function save(name, base64String) {
  const imageData = base64String.split("data:image/png;base64,")[1];
  // return fileStore.save(name, imageData);
  return s3Store.save(name, imageData);
}

module.exports = {
  save
};
