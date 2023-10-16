import {Person} from "./person.js"
import {Program} from "./program.js"

var data = Person("John", "Doe", 20);
var studying = Program("Business & Media", "Digital Design and Development Diploma");
var sentence = data + " " + studying;
console.log(sentence);

document.getElementById("content").innerHTML = sentence;