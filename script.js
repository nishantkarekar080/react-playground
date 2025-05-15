const arrObj = [
  {
    id: 1,
    name: "Nishant",
    lastName: "Karekar",
    rollNo: 12,
    description: "Hello my name is Nishatn",
  },
  {
    id: 2,
    name: "Himashu",
    lastName: "Karekar",
    rollNo: 12,
    description: "Hello my name is Nishatn",
  },
  {
    id: 3,
    name: "Deepak",
    lastName: "Karekar",
    rollNo: 12,
    description: "Hello my name is Nishatn",
    sex: "male",
  },
];
// const newArray = arrObj.map((item) => Object.keys(item));
const uniqueKeys = Array.from(
  new Set(arrObj.flatMap((item) => Object.keys(item)))
);
console.log(uniqueKeys);
