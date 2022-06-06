import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from("data_training")
    .select("*, jenis_gangguan (kd_penyakit, nama))");

  res.status(200).json(data);
}
