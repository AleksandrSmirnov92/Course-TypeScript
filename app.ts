// let a = 1
// let b:number = 5
// let j:number = a + b
// console.log(j)
// function getFullName (firstName:string, lastName:string) {
//     return `${firstName} ${lastName}`
// }
// console.log(getFullName("hai","hello"))

// работа  обьектами...
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

// работа с массивами...

// const skills: string[] = ["Dev", "Devops"];
// for (let skill of skills) {
//   console.log(skill.toUpperCase());
// }

// работа tuples...
// если в массиве только число и строка то это тип tuples и записывается в квадратные скобки и строго описывает наш массив
// let sckil: [number, string] = [1, "dev"];
// let f: [number, string, ...boolean[]] = [1, "dev", true, false, true];
// мы можем написать сколько угода булеввых значений после обьевления number и string

// работа readonly
// проблема модификаций и массивов если в случаю с констатой в переменной мы не можем переопределить то в массиве
// мы можем сказать skil[0] = 2 и он переопределится! для этого существует readonly который запрещает переопределять его можно только читать
// let sckil: readonly [number, string] = [1, "dev"];

// работа enums...
// enum Statuscode {
//   SUCCES,
//   IN_PROCESS,
//   FAILD,
// }
// let res = {
//   message: "Платеж успешен",
//   status: Statuscode.SUCCES,
// };

// продвинутые типы....

// Union - это возможность сказать что в той или иной переменной могут быть различные типы
// function logID(id: string | number | boolean) {
//   /**это первый union тип */
//   if (typeof id === "string") {
//     /**Проверка на типы */
//     console.log(id);
//   } else if (typeof id === "number") {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }
// function logError(id: string | string[]) {
//   if (Array.isArray(id)) {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }
// function logObject(obj: { a: number } | { b: number }) {
//   if ("a" in obj) {
//     console.log(obj);
//   } else {
//     console.log(obj);
//   }
// }
// logID(1);
// logID("dew");

// Литеральные ТИПЫ...

// function fetchWithAuth(id: string, method: "post" | "get") {}
// fetchWithAuth("1", "post");

// typeAlias.... упращения которые позволяют более эффективно записывать типы

// type hhtpmethod = "post" | "get"; /** сокращение */
// function fetchWithAuth(id: string, method: hhtpmethod) {}
// fetchWithAuth("1", "post");
// type User = {
//   name: string;
//   age: number;
//   frends: string[];
// };
// let user: User = {
//   name: "kostya",
//   age: 33,
//   frends: ["1", "2", "3"],
// };

// interface...
// interface User {
//   name: string;
//   age: number;
//   frends: string[];
// }
// interface UserWhithRole extends User {
//   roleId: number;
// }
// let user: UserWhithRole = {
//   name: "kostya",
//   age: 33,
//   frends: ["1", "2", "3"],
//   roleId: 20,
// };

// optional
// interface User {
//   login: string;
//   password?: string /**если мы ставим после имени свойства этот вопрос означает опциональность этог свойства */;
// }

// const user: User = {
//   login: "ddsf",
// };
function multiplay(first: number, second?: number): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
