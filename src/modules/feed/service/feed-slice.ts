import { createSlice as feedSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

interface FeedSliceState {
  selectedTag: string | null;
}

const initialState: FeedSliceState = {
  selectedTag: null,
};

export const tagsSlice = feedSlice({
  name: "feed",
  initialState,
  reducers: {
    selectTag(state, action: PayloadAction<string | null>) {
      state.selectedTag = action.payload;
    },
  },
});

export const { selectTag } = tagsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default tagsSlice.reducer;
