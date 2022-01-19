// class Car {
//   constructor(name, dateOfManufacture){
//       this.name = name;
//       this.dateOfManufacture = dateOfManufacture;
//   }
  
//   getAge(){
//       // На момент написания был 2020 год
//       return new Date().getFullYear() - this.dateOfManufacture;
//   }
// }

// const car = new Car('Audi', 2010);
// const car2 = new Car('BMW', 2022);
// car.name // 'Audi'
// car.getAge() // 10
// console.log(car2,car)


// class Animal {
//   constructor(heigth, weigth) {
//     super (heigth, weigth);
//     this.weigth = weigth;
//   }

//   getTestHeigth(){
//     return `${this.heigth} sm` 
//   }
// }

// let dog = new Animal(100, 35);
// console.log(dog.getTestHeigth())
// let cat = new Animal(50, 15);
// console.log(cat.getTestHeigth())

// class Dog extends Animal{

// }

// let dog1 = new Dog();
// console.log(dog1.getTestHeigth())

// Task1

const user = {
  name: "Sergey",
  birthDay: "1994.01.14",
};

function whenbirthDay( value ) {
  console.log(this.birthDay + value, "this.birthDay")
}

function bindFunc(foo, text, ...arg) {
  if(typeof foo === "function") {
    return foo.bind(text);
  }
  return "foo is not function";
}


// Task2

function countKey() {
  return Object.keys(this).length;
}

console.log(countKey.call(user));

// Task3

const valObject0 = {
  values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

function arrayFromObject() {
  let array = [];
  for (let i = 0; i < this.values.length; i++){
    let elements = this.values[i];
    if ((typeof elements === 'number') && (elements < 10) && (elements % 2 === 0)){
      array.push(elements);
    }
  }
  return array;
}

console.log(arrayFromObject.call(valObject0));

// Task4
   
person = {
  birthdayDate: new Date("1994-01-14")
  }
  
  console.log("birthdayDate.toLocalString=>",person.birthdayDate.toLocaleString());
  
  function whenNextBirthday(){
  let now = new Date();
  let nextbirthday = person.birthdayDate;
  
  if(now.getMonth()>person.birthdayDate.getMonth()|| (now.getMonth()===person.birthdayDate.getMonth() && now.getDate()>person.birthdayDate.getDate())){	
    nextbirthday.setFullYear(now.getFullYear()+1)
  }else{
    nextbirthday.setFullYear(now.getFullYear())
  }
  console.log("whenNextBirthday",(nextbirthday-now)/(1000*60*60*24))
  }

    whenNextBirthday(person);
let start = new Date();
alert("test");
let end = new Date();
console.log(end.getTime());
console.log("giff date",(end.getTime() - start.getTime())/(1000*60));
