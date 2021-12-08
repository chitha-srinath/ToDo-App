var pendingtodo = document.querySelector("#pend");
var completedtodo = document.querySelector("#done");

let apiurl = "https://jsonplaceholder.typicode.com/todos";
async function getapi(url) {
    let response = await fetch(url);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        if (data[i].completed == false) {
            let list1 = document.createElement("li");
            list1.innerHTML = data[i].title;
            pendingtodo.appendChild(list1);
        } else {
            let list2 = document.createElement("li");
            list2.innerHTML = data[i].title;
            completedtodo.appendChild(list2);
        }
    }
}
getapi(apiurl);