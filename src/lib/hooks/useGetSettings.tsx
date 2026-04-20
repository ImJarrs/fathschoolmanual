import axios from "axios";
import { useQuery } from "react-query";

export function useGetSettings() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL?.toString()}/getSettings`;

  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => axios.get(url),
    refetchInterval: 60000, // Refetch every 60 seconds,
    onError: (error) => console.log("Error:", error),
    onSuccess: (data) => console.log("Settings:", data),
  })

}

// useGetSettings.tsx
// import { useQuery } from "react-query";

// async function fetchSettings() {
//   const url = `${process.env.NEXT_PUBLIC_BACKEND_URL?.toString()}/getSettings`;
//   const res = await fetch(url);
//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(`Failed to fetch settings: ${res.status} ${text}`);
//   }
//   return res.json();
// }

// export function useGetSettings(initialData?: any) {
//   return useQuery({
//     queryKey: ['settings'],
//     queryFn: fetchSettings, // Gunakan fungsi yang sudah dipisah
//     refetchInterval: 60000, 
//     initialData: initialData, // <--- INI KUNCINYA
//     onError: (error) => console.log("Error:", error),
//     onSuccess: (data) => console.log("Settings:", data),
//   })
// }