/* function topla(a, b) {
    return a+b
} */

/* const topla = function topla(a, b) {
    return a+b
} */

const topla = (a, b) => {
  return a + b;
};

// const topla = (a, b) =>  a+b

const cikar = (a, b) => a - b;

const hello = (name) => {
  console.log("hellooo " + name);
};
// export default topla;

export const text = "Text Test";

const user = {
  name: "Asdaf",
  surname: "Asdaff",
};

const users = [
  {
    name: "Asdaf",
    surname: "Asdaff",
  },
  {
    name: "Test",
    surname: "Test",
  },
];

export { topla, cikar, user, users };
export default hello