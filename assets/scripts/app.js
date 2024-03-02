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

// 객체에서 전개 연산자
const user = {
    name: "Eunji",
    age: 23
};

const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);