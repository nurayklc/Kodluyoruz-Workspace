// Map Kullanimi

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"];

const newUsers = USERS.map((user) => user.toLowerCase());

console.log(newUsers);

// const user_obj = USERS.map((item) => {
//   return {
//     userName: item,
//     shortName: `${item[0]}.`,
//     newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
//   };
// });

const user_obj = USERS.map((item) => (
  {
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`,
  }
));

console.log(user_obj);
