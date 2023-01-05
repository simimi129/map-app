import axios from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export async function getPlacesData(sw, ne) {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        bl_latitude: sw?.lat,
        tr_latitude: ne?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
      },
      headers: {
        "X-RapidAPI-Key": "77ac067f60msh9dcca85bb8399a0p16f702jsn92d13262af36",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
}
