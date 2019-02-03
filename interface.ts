// 接口
interface LabelledValue {
    label: string;
}

function printLabel(LabelledObj: LabelledValue) {
    console.log(LabelledObj.label);
}

let myObj = { size: 10, label: "size 10 Object" };

printLabel(myObj)

// 可选属性
// 接口里的属性不全都是必需的。有些是只在某些条件下存在，或者根本不存在。 
// 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}


// 只读属性 
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
