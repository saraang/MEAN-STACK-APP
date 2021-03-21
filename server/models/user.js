const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
        "houseNumber": {
          "type": "String"
        },
        "houseName": {
          "type": "String"
        },
        "poi": {
          "type": "String"
        },
        "street": {
          "type": "String"
        },
        "subSubLocality": {
          "type": "String"
        },
        "subLocality": {
          "type": "String"
        },
        "locality": {
          "type": "String"
        },
        "village": {
          "type": "String"
        },
        "subDistrict": {
          "type": "String"
        },
        "district": {
          "type": "String"
        },
        "city": {
          "type": "String"
        },
        "state": {
          "type": "String"
        },
        "pincode": {
          "type": "Date"
        },
        "formattedAddress": {
          "type": "Date"
        },
        "eLoc": {
          "type": "String"
        },
        "latitude": {
          "type": "Number"
        },
        "longitude": {
          "type": "Number"
        },
        "geocodeLevel": {
          "type": "String"
        },
        "confidenceScore": {
          "type": "Number"
        },
        "matching": {
          "type": "String"
        },
        "partialMatch": {
          "type": "String"
        },
        "eopScore": {
          "type": "Number"
        }
})

const userSchema = new Schema({
    "firstName": {
      "type": "String"
    },
    "lastName": {
      "type": "String"
    },
    "email": {
      "type": "String"
    },
    "password": {
      "type": "String"
    },
    address: addressSchema
});

const User = mongoose.model('User', userSchema);

module.exports = { User };