import axios from "axios";

async function getData(userId) {
  let { data: users } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  // console.log("Users" + users)

  const { data: postsUser } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  // console.log("Posts User" + postsUser)
  users.posts = [...postsUser]
  console.log(users);
}

export default getData;
