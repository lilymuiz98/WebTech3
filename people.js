var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

function fullNamelist(personObject){
  var fullName1=[];
  console.log("in function");
  for(i=0; i < personObject.length;i++){
    var fullname='';
    for(j=0; j < personObject[i].name.length;j++){
    console.log(personObject[i].name[j]+" ");
    fullname += personObject[i].name[j]+" ";
  }
  fullName1.push(i+1 + "-"+ fullname);
}
return fullName1;
}

var allButton =document.getElementById("all");
allButton.addEventListener("click",function() {
  var list = fullNamelist(people);
  document.getElementById("solution").innerHTML=list.join(" <br> ");

});

function getAgefunction(fname){
  var age = "The person does not exist";
  console.log("the name value==="+fname);
  for(i=0;i< people.length;i++){
    if (people[i].name[0]==fname)
    {
      age = people[i].age;
    }
  }
  return age;
}
var ageButton =document.getElementById("age-button");
ageButton.addEventListener("click",function() {
  var name = document.getElementById("name-input").value;
  document.getElementById("solution").innerHTML=getAgefunction(name);
});
