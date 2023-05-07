const { ApiBaseUrl } = require("@/global/global-variables");

// const fetchData = async () => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     const data = json.data;
//     setProducts(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

async function fetchBusRoutes() {
  const url = `${ApiBaseUrl}/busses`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data;
    return data;
  } catch (error) {
    console.log("Fetching Error", error);
  }
}

export {
    fetchBusRoutes
}
