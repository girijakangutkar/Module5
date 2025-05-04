function fetchData() {
  let chances = Math.random().toFixed(1);
  let result = new Promise((res, rej) => {
    setTimeout(() => {
      if (chances > 0.5) {
        res("Fetched data successfully!", "chances:", chances);
      } else {
        rej("Error fetching data.", chances);
      }
    }, 2000);
  });
  //   return result

  result
    .then(() => {
      console.log("Success!", chances);
    })
    .catch((err) => {
      console.log("Error occurred: ", chances, err);
    })
    .finally(() => {
      console.log("Thank you!");
    });
}

async function fetchDataHandler() {
  try {
    let res = await fetchData();
    return res;
  } catch (err) {
    console.log("error occurred", err);
  }
}

fetchDataHandler();
