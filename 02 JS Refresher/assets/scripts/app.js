// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Eunji");
// console.log(greeting1);

// const greeting2 = createGreeting("Hunil", "Hello, How are you?");
// console.log(greeting2);

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// const user = {
//     name: "eunji",
//     age: 23,
//     greet() {
//         console.log("hello");
//         console.log(this.age);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('hi');
//     }
// }

// const user1 = new User("hunil", 26);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === 'Working');

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// // 배열에서 구조 분해 할당
// const [firstName, lastName] = ["Kim", "Eunji"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName);

// // 객체에서 구조 분해 할당
// const {name: userName, age} = {
//     name: "Eunji",
//     age: 23
// };

// // const name = user.name;
// // const age = user.age;

// console.log(userName);
// console.log(age);

// // 배열에서 전개 연산자
// const hobbies = ["Sports", "Cooking"];
//// const user = {
////    name: "Eunji",
////    age: 23
//// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [hobbies, newHobbies];
// console.log(mergedHobbies);

// // 객체에서 전개 연산자
// const user = {
//     name: "Eunji",
//     age: 23
// };

// const extendedUser = {
//     isAdmin: true,
//     ...user
// };
// console.log(extendedUser);

// // if문 (+prompt)
// const password = prompt("Your password");

// if (password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else {
//     console.log("Access not granted.");
// }

// // for문 (+of)
// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//     console.log(hobby);
// }

// // 함수를 값으로 전달하는 ex1. setTimeout 내장함수
// function handleTimeout() {
//     console.log("Time out!");
// }

// const handleTimeout2 = () => {
//     console.log("Time out ...again!");
// }

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//     console.log('More timing out...');
// }, 4000);

// // 함수를 값으로 전달하는 ex2. 나만의 함수
// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log('hi'));

// // 함수 안에 다른 함수 정의 (+init)
// function init() {
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }
// init(); // init은 전체 파일에서 사용할 수 있으므로 실행 가능
// // greet(); 은 init 안에서 정의되었으므로 안에서만 사용 가능

// 참조형과 기본값 비교
const hobbies = ["Sports", "Cooking"];
// hobbie = [];
hobbies.push("Working");
console.log(hobbies);