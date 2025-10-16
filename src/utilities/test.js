// fetch("/public/appsData.JSON")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
import fs from "fs/promises";

async function loadData() {
  try {
    const data = await fs.readFile("../../public/appsData.JSON", "utf-8");
    const json = JSON.parse(data);
    // console.log(json);
    json.map((app) => console.log(app.title));
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

loadData();
