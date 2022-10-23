/**
 *  enum type (열거형 타입)
 *  1. 숫자, 문자열만 허용
 *  2. 컴파일된 결과물은 객체로 정의되며 reverse maping 되어 Language.korean, Language['ko'] 처럼 값으로도 접근 가능하다.
 *  3. const 를 붙여 타입을 정의하면 컴파일 시 객체로 정의되지 않아 더 엄격한 타입 생성이 가능하다.
 */

export enum Commands {
  Quit = "Quit",
  Toggle = "Show/Hide Completed",
  Add = "Add New Task",
  Complete = "Complete Task",
  Purge = "Remove Completed Task",
}

/**
 *  union type & type guard
 *  1. 타입들의 조합을 통해 새로운 타입을 정의 할 수 있다.
 *  2. | (Union Operator: Pipeline)을 통해 정의할 수 있다.
 *  3. 멤버 사용은 정의된 모든 타입의 공통적인 멤버들만 사용 할 수 있다.
 *  4. 각 타입에 대한 고유 멤버에 대한 사용은 Type Guard 를 이용한다.
 *  5. Type Guard 는 특정 블록 안에서 해당 변수의 타입을 한정시켜주는 기능이다.
 *  6. Type Guard 는 사용자가 정의하거나 number, string, boolean, Symbol의 경우 typeof 연산자를 사용한다.
 */

/**
 *  타입가드 예시
let data: string | number[];

function isString(data: string | number[]): data is string {
  return (<string>data).split !== undefined;
}

data = "Typescript";
if (isString(data)) {
  data.split('')
} else {
  // number[]
}

if (typeof data === 'string') {
}
 */
