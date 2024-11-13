var itemList = [
  { no: 1, todo: "두부", done: true },
  { no: 2, todo: "계란", done: false },
  { no: 3, todo: "라면", done: true },
];

console.log(itemList[0]);
console.log(itemList[1]);

var [first, second] = itemList;
console.log(first); // { no: 1, todo: "두부", done: true }
console.log(second); // { no: 2, todo: "계란", done: false }

console.log(second.no, second.todo, second.done); // 2 계란 false

var { no, todo, done } = second;
console.log(no, todo, done); // 2 계란 false

var state = useState(0);
console.log(state[0]);
console.log(state[1](state[0] + 1));

var [count, setCount] = useState(0);
console.log(count);
console.log(setCount(count + 1));
