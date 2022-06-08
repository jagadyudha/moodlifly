export default async function handler(req, res) {
  const headers = new Headers();
  headers.set("Accept", "application/json");
  headers.set("Access-Control-Allow-Credentials", "true");
  headers.set("Access-Control-Allow-Origin", "true");
  headers.set("Content-Type", "application/json");
  if (req.method === "POST") {
    const response = await fetch(
      "https://safe-gorge-08943.herokuapp.com/result",
      {
        method: "POST",
        headers,
        body: JSON.stringify(req.body),
      }
    );

    const result = await response.json();
    return res.status(200).json(result);
  }
}
