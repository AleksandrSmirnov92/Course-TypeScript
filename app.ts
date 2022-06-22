// let a = 1
// let b:number = 5
// let j:number = a + b
// console.log(j)
// function getFullName (firstName:string, lastName:string) {
//     return `${firstName} ${lastName}`
// }
// console.log(getFullName("hai","hello"))

// работа  обьектами
// function getFullname(user: {
//   firstName: string;
//   surname: string;
//   age: number;
// }) {
//   return `${user.firstName} ${user.surname} ${user.age}`;
// }
// const user = {
//   firstName: "Anton",
//   surname: "Larichev",
//   age: 33,
// };

// console.log(getFullname(user));

// работа с массивами

const skills: string[] = ["Dev", "Devops"];
for (let skill of skills) {
  console.log(skill.toUpperCase());
}
