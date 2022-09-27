function student(){
    this.name = "eswar"
}
student.prototype.name = "prasad"
student.prototype.age = 23

let obj = new student()
console.log(obj.name)
console.log(obj.age)







let obj1 = {
    a: 1,
    __proto__: {
      b: 3,
      c: 4,
      __proto__: {
        d: 5,
      },
    },
  };
  console.log(obj1.d); 






const array1 = [10, 22, 13, 34];
const add= 0;
const sum = array1.reduce(
(previousValue, currentValue) => previousValue + currentValue,add);
   console.log(sum);









   let user = {
    name: 'eswar',
    age: 23
  };
  let props = Object.getOwnPropertyNames(user)
  console.log(props)
















  

  function allKeys(obj) {
    if (!isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    return keys;
}
function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
function Student(name) {
  this.name = name;
}
Student.prototype.rollno = true;
console.log(allKeys(new Student("Sara")));