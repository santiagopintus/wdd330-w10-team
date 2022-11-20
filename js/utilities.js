/* const getJSON = async (url) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        return res.json();
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}; */

function getJSON(url) {
  return fetch(url)
      .then(function(response) {
          if (!response.ok) {
              throw Error(response.statusText);
          } else {
              return response.json();
          }
      })
      .catch(function(error) {
          console.log(error);
      });
}

const getLocation = (options) => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};


export { getJSON, getLocation };