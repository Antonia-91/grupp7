console.log("hej");

// ------ hämta från DOM ----- //
const content = document.querySelector(".content");

// ----- create element ----- //
const ul = document.createElement("ul");
ul.setAttribute("class", "myUl");
content.appendChild(ul);

// ------ fetch ----- //
fetch("/adress.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    printInfo(data);
  });

function printInfo(persons) {
  for (person in persons) {
    tamplate = `<li class"myli> Namn:  <strong>${persons[person].Namn}</strong><br> Email: ${persons[person].email}<br>  GitHub: ${persons[person].gitHub} <br> Stad:  ${persons[person].stad} </li> <br>`;

    ul.insertAdjacentHTML("beforeend", tamplate);
  }
}