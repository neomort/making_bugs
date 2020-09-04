let header = "A list of my favorite bugs"

let bug = { name: "Fred", type: "Grasshopper", hobbies: "painting" };
let bug1 = { name: "Jolene", type: "Stick Bug", hobbies: "Horseshoes" };
let bug2 = { name: "Sam", type: "Moth", hobbies: "Baking" };

let state = {
  header: header,
  bugs: [bug, bug1, bug2]
}; 
function renderBugs(){
  bugsStr = "";
  state.bugs.forEach(function(bug,index){
    bugsStr +=
    `<div><li>${bug.name} is a good bug. They are a ${bug.type} and they like ${bug.hobbies}.</ol> 
    <h5 style="margin: 0; display: inline;" data-index='${index}' onclick='updateBug(this)' > update </h5> 
    <h5 style="margin: 0; display: inline;" align="right" onclick='delMe()'>delete</h5> 
    </div>`
  })
  return bugsStr;
}

function addBug() {
  
  let bug = {};

  let name = prompt("Enter name");
  bug.name = name;

  let type = prompt("Enter type of bug");
  bug.type = type;

  let hobbies = prompt("Enter this bug's hobby");
  bug.hobbies = hobbies;

  state.bugs.push(bug);

  render();
}

function updateBug(bugDiv) {
  let index = bugDiv.dataset.index;
  let bug = state.bugs[index];
  console.log(bug);

  let name = prompt("Enter name");
  bug.name = name;

  let type = prompt("Enter type of bug");
  bug.type = type;

  let hobbies = prompt("Enter this bug's hobby");
  bug.hobbies = hobbies;

  render();
}

Boolean: del = false;

function delMe(){
  del = true;
}


function render(){
  htmlString = `<div>
                    <h1>
                   ${state.header}
                    </h1>
                    <h3>
                    ${renderBugs()}
                    </h3>
                    <h4>
                    <div style="color: green;"onclick='addBug()'>add a bug!</div>
                    </h4>

                    <div>`;

  deleteHtml =  `<div>
               
                    </div>`;

                    if (del == false){
  document.getElementById("app").innerHTML = htmlString;}
              else{
  document.getElementById("del").innerHTML = deleteHtml;
                    }
}

render();