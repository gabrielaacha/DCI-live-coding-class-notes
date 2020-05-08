// Fetch

// we always work with API, either receiving or sending data. we will always get json file from the database.you have to flip it into a normal object first
// fetch will come back always with promise, fetch will always bring promise back

//fetching from the text file:
const fetchTextFile = () => {
  fetch("./plain.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
};

//fetching from the json file
const fetchJsonFile = () => {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let userCard = "<h2> All users </h2>";
      data.forEach((user) => {
        userCard += `<div class="card" id=${user.id}>  
        <div class="avatar">${user.photo}</div>
          ${user.name}, <span>${user.age}
          </span>old and lives in 
          <span>${user.city}</span>
          
          </div>`;
      });

      document.querySelector(".result").innerHTML = userCard;
    });
};

// free APIs --> https://jsonplaceholder.typicode.com/--> available APIs to test our applications

//fetching from the API:
const fetchApi = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let imgCard = "<h2> Images </h2>";
      data.forEach((img) => {
        imgCard += `<div id=${img.id}>
        <img src=${img.url} alt=${img.title}></div>`;
      });
    });
  //this is coming from backend server
};
