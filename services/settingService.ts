// services/settingsService.ts
import axios from "axios";

// Pastikan URL backend bisa diakses saat build time!
// Jika backend ada di localhost saat dev, ini oke. 
// Tapi saat build di Vercel/Netlify, backend harus live.
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchSettings = async () => {
  const response = await axios.get(`${BACKEND_URL}/getSettings`);
  return response.data;
};