// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     // console.log(res);
//     let userNames = res.map((ele) => {
//       //   return ele.username;
//       console.log(ele.username);
//     });
//     return userNames;
//     // console.log(userNames);
//     // return userNames;
//   })
//   .catch((err) => {
//     console.log("error occurred", err);
//   })
//   .finally(() => {
//     console.log("Be cautious !");
//   });

async function findUserName() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);

    //* Mapping each user from the data and returning the name of the user
    let user = data.map((user) => {
      console.log(user.name);
    });
    return user;
  } catch (err) {
    console.log("error occurred", err);
  }
}

findUserName();
