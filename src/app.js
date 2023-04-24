/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  //console.log("Hello from the console " + randomNumber);
  //document.querySelector(".excuse").innerHTML = randomNumber;

  //document.querySelector(".excuse").innerHTML = excuseGenerator();
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector(".excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  const excuse_object = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed ", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  };
  let element = Object.keys(excuse_object);
  let str = "";

  element.forEach(element => {
    console.log(element);
    //console.log(excuse_elemets[element].length);
    var random_int = Math.floor(Math.random() * excuse_object[element].length);
    console.log(random_int);
    console.log(excuse_object[element][random_int]);
    let excuse_element = excuse_object[element][random_int];
    str += excuse_element + " ";
  });

  return str;
};
