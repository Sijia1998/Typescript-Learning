// TypeScript支持与JavaScript几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用

// 布尔值
let isDone: boolean = false;

// 数字 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
let myName: string = "bob";
myName = "smith"

// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
let ownName: string = 'Gene'
let age: number = 37;
let sentence: string = `hello,my name is ${ownName}. I'll be ${age + 1} years old next month.`;

// 这与下面定义sentence的方式效果相同：
let sentenceSec: string = "Hello,my name is " + ownName + ".\n\n" + "'I'll be " + (age + 1) + "years old next month."; 

