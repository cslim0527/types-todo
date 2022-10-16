/**
 *  enum type (열거형 타입)
 *  1. 숫자, 문자열만 허용
 *  2. 컴파일된 결과물은 객체로 정의되며 reverse maping 되어 Language.korean, Language['ko'] 처럼 값으로도 접근 가능하다.
 *  3. const 를 붙여 타입을 정의하면 컴파일 시 객체로 정의되지 않아 더 엄격한 타입 생성이 가능하다.
 */

export enum Commands {
  Quit = "Quit",
  Add = "Add",
}
