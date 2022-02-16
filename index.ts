// 타입스크립트의 경우 어떤 종류의 변수와 데이터인지 설정을 해줘야 한다. 예) 문자열만 들어갈 경우, 또는 숫자만 들어갈 경우
// 또는 해당 함수가 true or false 표현하는 boolean 함수를 리턴하거나

const name = "BigJay",
  age = 34,
  gender = "male";

// Parameter뒤에 ?를 붙임으로 선택적으로 사용할 수 있게 할 수 있다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
};

//여기서 하나의 Argument만 빠져도 타입스크립트는 오류를 표시한다.
//위에서는 3개의 Parameter를 작성하였으나 실제 사용에선 2개의 Argument만 사용했기 떄문에 오류 표시
sayHi(name, age);

//현재는 타입을 지정하지 않았기 때문에 export {}를 사용하여 먼저 오류를 없애고 확인한다.
export {};
