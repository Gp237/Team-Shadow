import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PublicServices from "./service";

const initialState = {
  selectedSection: "",
  selectedSubsection: "",
  latestImgUploaded: {},
  setGolValueAutomatically: false,
  language: "english",
  sendNotificationEmails: false,
  currentStep: 0,
  stepData:{},
  currentUpdateId : '',
  dataFiltered: []
};

export const newImage = createAsyncThunk(
  "/upload_image",
  async ({ token, data }, thunkApi) => {
    try {
      const res = await PublicServices.uploadImage(token, data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
export const removeImage = createAsyncThunk(
  "/remove_image",
  async ({ token, data }, thunkApi) => {
    try {
      const res = await PublicServices.deleteImage(token, data);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const publicSlice = createSlice({
  name: "public",
  initialState,
  reducers: {
    sectionSelection: (state, action) => {
      state.selectedSection = action.payload;
    },
    updateGoldValue: (state, action) => {
      state.goldValue = action.payload;
    },
    updateGoldValueStatus: (state, action) => {
      state.setGolValueAutomatically = action.payload;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
    updateStep: (state, action) => {
      state.currentStep = action.payload;
    },
    addStepData: (state, action) => {
      state.stepData = action.payload;
    },
    updateId: (state, action) => {
      state.currentUpdateId = action.payload;
    },
    filterItemsById: (state, action) => {
      state.dataFiltered = action.payload.filter(el => el._id === state.currentUpdateId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newImage.fulfilled, (state, action) => {
      state.latestImgUploaded = action.payload;
    });
    builder.addCase(removeImage.fulfilled, (state, action) => {
      state.latestImgUploaded = action.payload;
    });
  },
});

export default publicSlice.reducer;
export const {
  sectionSelection,
  updateGoldValue,
  updateGoldValueStatus,
  updateLanguage,
  updateStep,
  addStepData,
  updateId,
  filterItemsById
} = publicSlice.actions;
