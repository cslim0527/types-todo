### interface

1. 인터페이스는 여러 타입의 속성으로 이루어진 새로운 타입을 정의하는 방법
2. 인터페이스도 클래스와 마찬가지로 프로퍼티와 메서드를 갖지만 인터페이스를 이용한 인스턴스는 생성 할 수 없다.
3. 인터페이스에 정의하는 메서드는 모두 추상 메서드며 abstract 키워드를 사용하지 않습니다.
4. 인터페이스를 이용하면 변수, 함수, 클래스에 타입을 지정 할 수 있습니다.


```typescript
// optional property === (?)
interface Shape {
    p1: number[]
    p2: number[]
    area?: number
}

let rectangle: Shape = {
    p1: [10, 20],
    p2: [20, 20],
    area: 100
}

let line: Shape = {
    p1: [10, 20],
    p2: [20, 20]
}

// readonly property (readonly)
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 10,
    y: 20
}

p1.x = 100
```

### interface와 class
1. 클래스는 implements 키워드를 통해 인터페이스를 구현할 수 있습니다.
2. 인터페이스를 구현한 클래스를 인터페이스에 정의된 추상메소드를 구현해야 합니다.
3. 하나의 클래스는 다수의 인터페이스를 구현(implements) 할 수 있으며 인터페이스간 확장(extends)도 가능합니다.
4. 특정 인터페이스에서 정의한 프로퍼티나 메서드를 갖고 있는 클래스는 해당 인터페이스를 구현한 것으로 인정하며 이를 덕타이핑(duck typing) 이라고 한다.

```typescript
interface IBhavior {
    play(): void;
}

class Soccer implements  IBhavior {
    play() {
        console.log('Play Soccer')
    }
}

class Guitar implements  IBhavior {
    play() {
        console.log('Play Guitar')
    }
}
```

```typescript
interface Drawable {
    drawing(): void;
}

interface Sortable {
    sorting(): void;
}

class Canvas implements Drawable, Sortable {
    drawing() {
        console.log('Drawing...')
    }
    
    sorting() {
        console.log('Sorting...')
    }
}

```