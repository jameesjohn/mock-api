const {resolve} = require('json-schema-faker');
const fs = require('fs');

const schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/positiveInt'
        },
        name: {
          type: 'string',
          faker: 'name.findName'
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email'
        }
      },
      required: ['id', 'name', 'email']
    }
  },
  required: ['user'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};
const schema2 = {
  type: "object",
  properties: {
    first_name: { "type": "string" },
    last_name: { "type": "string" },
    birthday: { "type": "string", "format": "date" },
    address: {
      type: "object",
      properties: {
        street_address: { "type": "string" },
        city: { "type": "string" },
        state: { "type": "string" },
        country: { "type" : "string" }
      },
      required: ['street_address', 'city', 'state', 'country']
    }
  },
  required: ['first_name', 'last_name', 'birthday', 'address']
}
const schema3 = {
  type: 'array',
  items: {

  }
}
resolve(schema2).then(sample => {
  console.table(sample);
  /* fs.writeFile(`${__dirname}/db.json`, JSON.stringify(sample), function() {
    console.log('done');
  }) */
});