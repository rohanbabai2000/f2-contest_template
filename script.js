/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(obj => {
      if(obj.profession=="developer"){
        console.log(obj);
      }
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element => {
      if(element.profession=="developer"){
        console.log(element);
      }
    });
}

function addData() {
  //Write your code here, just console.log
  function addUser(arr, newUser) {
    arr.push(newUser); // Add new object to the array
  }

  addUser(arr, { id:4, name:"Rohan", age:25, profession:"Dev"});

  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  let brr = [];
  brr.push(arr.filter(user => user.profession!="admin"));
  console.log(brr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let ids = arr.length;
    let arr1 = [
      { id: ids + 1, name: "Rohan", age: "25", profession: "devops" },
      { id: ids + 2, name: "Ryan", age: "25", profession:"analyst" },
      { id: ids + 3, name: "Radhe", age: "29", profession: "developer" },
    ];
  let array = arr.concat(arr1);
  console.log(array);
}

//concatenateArray();