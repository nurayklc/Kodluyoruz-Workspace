import axios from "axios";

const getComments = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    resolve(data);
    //reject("Bir sorun oluştu")
  });
};

const getPosts = (postId) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    resolve(data);
    //reject("Bir sorun oluştu")
  });
};

(async () => {
  try {
    const comments = await getComments();
    const post = await getPosts(1);
    console.log(comments);
    console.log(post);
  } catch (error) {
    console.log(error);
  }
})();

// Promise.all([getComments(),getPosts(1)]).then(console.log).catch(console.log)