

let root = document.getElementById("root");

onload();


function onload() {
  //Hämtar all data och loopar igenom
  getPosts();
}

//FETCHAR ALLT I GET
function getPosts() {
  fetch('http://localhost:5000/blog')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      loopdata(data);
    })
    .catch(err => console.error(err))
};


//TAR EMOT EN ARRAY
function loopdata(data) {
  for (let i = 0; i < data.length; i++) {
    let h1 = document.createElement("h1");
    h1.innerHTML = data[i].title;
    let p = document.createElement("p");
    p.innerHTML = data[i].post;
    root.append(h1, p);
  }
}



