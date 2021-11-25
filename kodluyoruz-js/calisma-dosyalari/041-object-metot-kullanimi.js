let user = {
  firstName: "Bilgin",
  lastName: "Korkmaz",
  score: [1, 2, 3, 4],
  isActive: true,
  shortName: function () {
    return `${this.firstName[0].toUpperCase()} ${this.lastName}`; 
  },
};

console.log(user);
console.log(user.shortName); 
console.log(user.shortName());