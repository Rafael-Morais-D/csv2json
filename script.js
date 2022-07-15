// let exampleJson = [
//   {
//     "id": 1,
//     "string": "string1",
//     "number": 501,
//     "booleanTrue": true,
//     "booleanFalse": false,
//     "null": null,
//     "object": {"first": "first", "second": "second"},
//     "array": [1, 2, 3, 4]
//   },
//   {
//     "id": 2,
//     "string": "string2",
//     "number": 502,
//     "booleanTrue": true,
//     "booleanFalse": false,
//     "null": null,
//     "object": {"first": "first", "second": "second", "third": "third"},
//     "array": [1, 2]
//   }
// ]

// let exampleJson = {
//   "id": 1,
//   "string": "string1",
//   "number": 501,
//   "booleanTrue": true,
//   "booleanFalse": false,
//   "null": null,
//   "object": {"first": "first", "second": "second"},
//   "array": [1, 2, 3, 4]
// }

let exampleCsv = "id,string,number,booleanTrue,booleanFalse,null,object,array\n1,string1,501,true,false,null,{\"first\": \"first\", \"second\": \"second\"},[1, 2, 3, 4]\n2,string2,502,true,false,null,{\"first\": \"first\", \"second\": \"second\", \"third\": \"third\"},[1, 2]"


function collectKeysFromJson(jsonFile) {
  if (Array.isArray(jsonFile)) {
    return `${Object.keys(jsonFile[0]).toString()}\n`
  } else if (typeof jsonFile === 'object') {
    return `${Object.keys(jsonFile).toString()}\n`
  } else {
    throw new Error('Please use valid format')
  }
}

function collectValuesFromJson(jsonFile) {
  if (Array.isArray(jsonFile)) {
    let string = ''
    jsonFile.forEach(element => string += `${Object.values(element).toString()}\n`)
    return string
  } else if (typeof jsonFile === 'object') {
    return `${Object.values(jsonFile).toString()}\n`
  } else {
    throw new Error('Please use valid format')
  }
}

// let newClsString = collectKeysFromJson(exampleJson) + collectValuesFromJson(exampleJson)

console.log(exampleCsv)
