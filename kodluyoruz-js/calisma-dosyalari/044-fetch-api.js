// Json dosyasından veri alma
fetch("data/settings.json")
  .then((response) => (response = response.json()))
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

let userList = document.querySelector("#userList")  
// API üzerinden veri alma
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((responseJson) => {
      responseJson.forEach(element => {
          let li = document.createElement("li")
          li.innerHTML = element.title
          userList.appendChild(li)
      });
  });
