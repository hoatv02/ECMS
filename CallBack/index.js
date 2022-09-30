// 1.Là hàm
// 2.Được chuyền qua đối số.
// 3.Được gọi lại function();
// function  myFunction(params) {
//     if(typeof params === 'function'){
//         params("JavaScript");
//     }
// }
// function myCallBack(value) {
//     console.log("Khóa học lập trình : ",value);
// }
// myFunction(myCallBack);



// Callback phần 2:
// Array.prototype.myMap = function(abc){
//     var output = [];
//     var length = this.length;
//     for (let i = 0; i < length; ++i) {
//         var result = abc(this[i],i);
//         output.push(result);
//     }
//      return output;
// }
// var courses = ['JavaScript','PHP','Python','Hòa Trần'];
// var htmls = courses.myMap(function(course,index){
//     return `<h2>${course}</h2>`;
// });
// const page = document.querySelector(".page")
// page.innerHTML=htmls.join('');
// // console.log(htmls.join(''));


// MyForeach :
 var course 