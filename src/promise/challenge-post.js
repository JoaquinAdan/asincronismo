import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// function postData(urlApi, data) {
//   const response = fetch(urlApi, {
//     method: "POST",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response;
// }

// const data = {
//   title: "318",
//   price: 318,
//   description: "A description",
//   categoryId: 1,
//   images: ["https://placeimg.com/640/480/any"],
// };

// postData(`${API}/products`, data)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// function postData(urlApi, id) {
//     const response = fetch(`${urlApi}/${id}`, {
//       method: "DELETE",
//       mode: "cors",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     return response;
//   }

//   const data = {
//     title: "318",
//     price: 318,
//     description: "A description",
//     categoryId: 1,
//     images: ["https://placeimg.com/640/480/any"],
//   };

//   postData(`${API}/products`, "318")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

function postData(urlApi, data, id) {
  const response = fetch(`${urlApi}/${id}`, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "319",
  price: 319,
  description: "A cambiado x2",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data, 319)
  .then((response) => response.json())
  .then((data) => console.log(data));
