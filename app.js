"use strict";
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
// const skills: string[] = ["Dev", "Devops"];
// for (let skill of skills) {
//   console.log(skill.toUpperCase());
// }
// работа tuples
// если в массиве только число и строка то это тип tuples и записывается в квадратные скобки и строго описывает наш массив
// let sckil: [number, string] = [1, "dev"];
// let f: [number, string, ...boolean[]] = [1, "dev", true, false, true];
// мы можем написать сколько угода булеввых значений после обьевления number и string
// работа readonly
// проблема модификаций и массивов если в случаю с констатой в переменной мы не можем переопределить то в массиве
// мы можем сказать skil[0] = 2 и он переопределится! для этого существует readonly который запрещает переопределять его можно только читать
// let sckil: readonly [number, string] = [1, "dev"];
// работа enums
var Statuscode;
(function (Statuscode) {
    Statuscode[Statuscode["SUCCES"] = 0] = "SUCCES";
    Statuscode[Statuscode["IN_PROCESS"] = 1] = "IN_PROCESS";
    Statuscode[Statuscode["FAILD"] = 2] = "FAILD";
})(Statuscode || (Statuscode = {}));
let res = {
    message: "Платеж успешен",
    status: Statuscode.SUCCES,
};
