import { supabase } from "@/lib/supabase";

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

    if (result) {
      const { data, error } = await supabase
        .from("penyakit")
        .select("*")
        .eq("kd_penyakit", result[1].prediction)
        .single();
      res.status(200).json(data);
    } else {
      res.status(200).json({ status: "error" });
    }
  }
}
