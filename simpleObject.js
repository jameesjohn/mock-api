const schema = {
  "type": "object",
  "required": ["name", "school", "class"],
  "properties": {
    "name": {
      "type": "string"
    },
    "school": {
      "type": "string"
    },
    "class": {
      "type": "string"
    }
  }
}
const obj = {
  name: "A name",
  school: "Monef High School",
  class: "Junior Secondary"
}

const schema2 = {
  type: "array",
  items: [
    {
      type: "string"
    },
    {
      type: "number"
    }
  ]
}