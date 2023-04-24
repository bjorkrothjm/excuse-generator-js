/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let randomNumber = Math.random() * 10;
  console.log("Hello from the console " + randomNumber);
  document.querySelector(".excuse").innerHTML = randomNumber;

  const excuse_elemets = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  };
  console.log(excuse_elemets);

  for (let array of excuse_elemets) {
    console.log(array);
  }
};

/*

  let generateExcuse = () => {
    const excuse_elemets = {
      who: ["The dog", "My grandma", "His turtle", "My bird"],
      action: ["ate", "peed", "crushed", "broke"],
      what: ["my homework", "the keys", "the car"],
      when: [
        "before the class",
        "right on time",
        "when I finished",
        "during my lunch",
        "while I was praying"
      ]
    };
    console.log(excuse_elemets);

    // creating the excuse
    function generator(array) {
      for (let i = 0; i < 4; i++) {
        return array[Math.floor(Math.random() * array.lenght)];
      }
    }
    for (let new_array of excuse_elemets) {
      var str = "";
      str += generator(new_array);
    }
    return str;
  };
};

/*
let generateExcuse () => {
    const excuse_elemets = {
      who: ["The dog", "My grandma", "His turtle", "My bird"],
      action: ["ate", "peed", "crushed", "broke"],
      what: ["my homework", "the keys", "the car"],
      when: ["before the class","right on time","when I finished","during my lunch", "while I was praying"]
    };


    // creating the excuse
    function generator(array) {
      for (let i = 0; i < 4; i++) {
        return array[Math.floor(Math.random() * array.lenght)];
      };
    };
    
    for (let array of excuse_elemets) {
      var str = "";
      str += generator(array);
    };
    return str;
};
*/
