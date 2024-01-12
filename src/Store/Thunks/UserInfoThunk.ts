import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../Services/Supabase";

export const UserInfoThunk = createAsyncThunk("user/info", async () => {
  const { data, error } = await supabase.from("DEV").select("*");

  if (error) throw error;
  return data;
});
