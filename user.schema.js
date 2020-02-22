const {resolve, extend} = require('json-schema-faker');
const fs = require('fs');

extend('faker', () => require('faker'));

const schema = {
  type: "object",
  required: ["users"],
  properties: {
    users: {
      type: "array",
      minItems: 20,
      items: { "$ref": "#/definitions/users" }
    }
  },
  definitions: {
    users: {
      type: "object",
      required: [ "id", "first_name", "last_name", "age", "email", "username", "avatar" ],
      properties: {
        id: {
          $ref: '#/definitions/positiveInt'
        },
        first_name: {
          type: "string",
          faker: "name.firstName"
        },
        last_name: {
          type: "string",
          faker: "name.lastName"
        },
        age: {
          type: "integer",
          maximum: 70,
          minimum: 18
        },
        email: {
          type: "string",
          faker: "internet.email"
        },
        username: {
          type: "string",
          faker: "internet.userName"
        },
        avatar: {
          type: "string",
          faker: "internet.avatar"
        }
      }
    },
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
}

resolve(schema).then(sample => {
  console.log('Writing to db.json')
  fs.writeFile(`${__dirname}/db.json`, JSON.stringify(sample), function(err) {
    if(err) {
      console.error(err);
    } else {
      console.log("done");
    }
  });
});