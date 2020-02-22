const jsf = require('json-schema-faker');

jsf.extend('faker', () => require('faker'));

const schema = {
  "type": "object",
  "required": ["name", "email"],
  "properties": {
    "name": {
      "type": "string",
      "faker": "name.findName"
    },
    "email": {
      "type": "string",
      "faker": "internet.email"
    }
  }
}

jsf.resolve(schema).then(result => {
  console.table(result);
});