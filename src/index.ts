//하나의 객체를 type으로 지정하기 위해 interface를 사용한다.
// interface는 컴파일되지 않는다.
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// private은 클래스 내부에서만 접근이 가능하다.
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// const person = {
//   name: "BigJay",
//   age: 34,
//   gender: "male",
// };

const bigJay = new Human("BigJay", 34, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}`;
};

console.log(sayHi(bigJay));

export {};
