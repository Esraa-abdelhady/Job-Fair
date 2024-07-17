import axios from "axios";

export async function getData() {
  const { data } = await axios.get("https://esraa-abdelhady.github.io/Json-Server/data.json");

  console.log(data);

  return data;
}
