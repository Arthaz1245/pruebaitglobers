import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: null,
};
export const clothesFetch = createAsyncThunk(
  "clothes/clothesFetch",
  async () => {
    try {
      const response = await axios.get("http://localhost:4500/clothes");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {},
  extraReducers: {
    [clothesFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [clothesFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [clothesFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default clothesSlice.reducer;
