const getJSON = async (url) => {
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
};

const getLocation = (options) => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
};


export { getJSON, getLocation };