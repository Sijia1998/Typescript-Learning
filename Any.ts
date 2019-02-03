// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
// 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
// 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay,definitely a boolen

// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let anyList: any[] = [1, true, "free"];

anyList[1] = 100;