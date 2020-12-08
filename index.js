const fs = require('fs')
const question = require('./questions')

fs.writeFileSync("questions.json", JSON.stringify({ questions: [question] }))

const questionsJson = JSON.parse(fs.readFileSync("questions.json"))
// console.log(questionsJson);

questionsJson.questions.push(question())

fs.writeFileSync("questions.json", JSON.stringify(questionsJson))