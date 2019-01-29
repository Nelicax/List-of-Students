var data = [
  { id: "1122222", name: "John", score: 90 },
  { id: "2223333", name: "Larry", score: 60 },
  { id: "4455555", name: "Joseph", score: 50 },
  { id: "5526666", name: "Karla", score: 80 }
];

var names = [];

/*For loop to push into variable names the .name property
of object data into the new nickname "Student"*/
data.forEach(student => {
  names.push(student.name);
});
/* For testing purposes. Printing the variable content. 
document.write(names);*/

/* Creating function to load the lzist once the button 
Load is pushed*/

function loadDataGrid() {
  var count = 0;
  let dataList = document.getElementById("dataList");

  while (count < data.length) {
    var listItem = document.createElement("section");
    listItem.classList.add("row");

    var id = document.createElement("div");
    id.classList.add("col-sm");
    id.innerText = data[count].id;

    var name = document.createElement("div");
    name.classList.add("col-sm");
    name.innerText = data[count].name;

    var score = document.createElement("div");
    score.classList.add("col-sm");
    score.innerText = data[count].score;

    var currentScore = data[count].score;
    var passingScore = document.getElementById("passingScoreInput").value;
    if (currentScore <= passingScore) {
      score.classList.add("lowScore");
    }

    dataList.appendChild(listItem);

    listItem.appendChild(id);
    listItem.appendChild(name);
    listItem.appendChild(score);

    count++;
  }
}

/* Creating function to calculate the average once the button 
Average is pushed*/

function calculateAverage() {
  var average = 0;
  data.forEach(student => {
    average = average + student.score;
  });
  average = average / data.length;

  return average;
}

/* Creating function to display the average once the button 
Average is pushed*/

function displayAverage() {
  var resultSection = document.getElementById("resultSection");
  var paragraph = document.createElement("p");
  paragraph.classList.add("badge"); // 2) Bootstrap classes
  paragraph.classList.add("badge-info");

  paragraph.innerText = "Average: " + calculateAverage();

  resultSection.appendChild(paragraph);
}

function refreshScores() {
  let dataList = document.getElementById("dataList");

  while (dataList.childElementCount > 1) {
    dataList.removeChild(dataList.lastChild);
  }
  loadDataGrid();
}

function addNewStudent() {
  var scoreInput = document.getElementById("scoreInput").value;
  var nameInput = document.getElementById("nameInput").value;
  var idInput = document.getElementById("idInput").value;

  data.push({
    id: idInput,
    name: nameInput,
    score: scoreInput
  });

  refreshScores();
}
