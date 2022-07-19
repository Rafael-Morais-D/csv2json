const jsonValueInput = document.getElementById('jsonValueInput')
const csvValueInput = document.getElementById('csvValueInput')
const getConvertButton = document.getElementById('convertButton')
const getTitle = document.getElementById('title')
let jsonToCsvButton = document.getElementsByClassName('jsonToCsvConverter')
let csvToJsonButton = document.getElementsByClassName('csvToJsonConverter')

let jsonInputValue = jsonValueInput.value
let csvInputValue = csvValueInput.value

jsonValueInput.addEventListener('click', function () {
  getConvertButton.classList.add('jsonToCsvConverter')
  getConvertButton.classList.remove('csvToJsonConverter')
  getTitle.innerHTML = 'Conversor JSON para CSV'
})

csvValueInput.addEventListener('click', function () {
  getConvertButton.classList.add('csvToJsonConverter')
  getConvertButton.classList.remove('jsonToCsvConverter')
  getTitle.innerHTML = 'Conversor CSV para JSON'
})

getConvertButton.addEventListener('click', function () {
  try {
    if (jsonToCsvButton[0]) {
      let newObjectFromJson = jsonStringToObject(jsonInputValue)
      // csvInputValue = collectKeysFromJson(newObjectFromJson) + collectValuesFromJson(newObjectFromJson)
      console.log(newObjectFromJson)
    } else if (csvToJsonButton[0]) {
      // jsonInputValue = convertArrayIntoJson(convertCsvIntoArray(csvInputValue))
      console.log(convertArrayIntoJson(convertCsvIntoArray(csvInputValue)))
    }
  } catch (error) {
    alert(error.message)
  }
})

let exampleJson = '{"name":"John", "age":30, "car":null}'
let exampleCsv = 'id,string,number,booleanTrue,booleanFalse,null,object,array\n1,string1,501,true,false,null,{"first": "first"},[1]\n2,string2,502,true,false,null,{"first": "first"},[1]'

/* Conversão JSON para CSV */

function jsonStringToObject(jsonFile) {
  if (typeof jsonFile === 'string'){
    return JSON.parse(jsonFile)
  } else {
    return jsonFile
  }
}

function collectKeysFromJson(object) {
  if (Array.isArray(object)) {
    return `${Object.keys(object[0]).toString()}\n`
  } else if (typeof object === 'object') {
    return `${Object.keys(object).toString()}\n`
  } else {
    throw new Error('Please use valid format')
  }
}

function collectValuesFromJson(object) {
  if (Array.isArray(object)) {
    let string = ''
    object.forEach(element => string += `${Object.values(element).toString()}\n`)
    return string
  } else if (typeof object === 'object') {
    return `${Object.values(object).toString()}\n`
  } else {
    throw new Error('Please use valid format')
  }
}

/* Conversão CSV para JSON */

function convertCsvIntoArray(csvFile) {
  return csvFile.split('\n')
}

/* Função com característica quadrática, necessita refatoração */
function convertArrayIntoJson(array) {
  const newObject = new Object()
  let keys = []
  let values = []
  let newJson
  for(let i = 1; i < array.length; i++) {
    keys = array[0].split(',')
    values = array[i].split(',')
    keys.forEach((element,index) => newObject[element] = values[index])
    newJson += JSON.stringify(newObject)+','
  }
  return newJson
}
