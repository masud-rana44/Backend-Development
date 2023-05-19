import axios from "axios";

const form = document.querySelector(".form");

if (form)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    // retrive all the question form the server
    // generate a page for each
    // generate the result page
  });
