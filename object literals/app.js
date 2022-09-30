var name ='JavaScript';
var price = 12000;
var course = {
    name,
    price,
    getName(){
        return name;
    }

};
console.log(course.getName());


 var fieldName = 'name';
 var fieldPrice = 'price';
 const courses = {
    [fieldName]:'JavaScript',
    [fieldPrice]:12000,
 };
 console.log(courses);