function hello(firstName) {
  console.log(`Merhaba ${firstName}`);
}

hello("Javascript");

const helloFunc = (firstName) => {
  console.log(`Merhaba ${firstName}`);
};

helloFunc("Javascript 1");

const helloFunc2 = (firstName) => console.log(`Merhaba ${firstName}`);

helloFunc2("2");

const helloFunc3 = (firstName, lastName) =>
  console.log(`Merhaba ${firstName} ${lastName}`);

helloFunc3("ahsha", "vvvvvv");

const helloFunc4 = (firstName, lastName) => {
  let info = `Merhaba ${firstName}`;
  console.log(info);
  return info;
};

helloFunc4("skskks", "smsks");
