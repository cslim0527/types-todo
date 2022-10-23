```typescript

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


// Union Type과 Type Guard 를 사용한 Sorter 모듈

class NamooSorter {
  constructor(private collection: number[] | string) {}

  sort(): number[] | string {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (typeof this.collection === "string") {
          if (
            this.collection[j].toLowerCase() >
            this.collection[j + 1].toLowerCase()
          ) {
            const characters = this.collection.split("");
            const temp = characters[j];
            characters[j] = characters[j + 1];
            characters[j + 1] = temp;
            this.collection = characters.join("");
          }
        }

        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }

    return this.collection;
  }
}

export default NamooSorter;

```