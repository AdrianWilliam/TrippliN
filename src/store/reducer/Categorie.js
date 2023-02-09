import { createSlice } from "@reduxjs/toolkit";

export const defineCategorie = createSlice({
  name: "setCategorie",
  initialState: {
    categorie: "all",
  },
  reducers: {
    allCategories: (state) => {
      state.categorie = "all";
    },
    autos: (state) => {
      state.categorie = "autos";
    },
    eletronics: (state) => {
      state.categorie = "eletronic";
    },
    forHome: (state) => {
      state.categorie = "forhome";
    },
    sports: (state) => {
      state.categorie = "sports";
    },
    musicAndHobbies: (state) => {
      state.categorie = "musicandhobbies";
    },
    fashionAndBeauty: (state) => {
      state.categorie = "fashionandbeauty";
    },
    agroAndBusiness: (state) => {
      state.categorie = "agroandbusiness";
    },
  },
});

export const {
  allCategories,
  properties,
  autos,
  eletronics,
  forHome,
  sports,
  sportsAndRecreation,
  musicAndHobbies,
  fashionAndBeauty,
  agroAndBusiness,
} = defineCategorie.actions;

export default defineCategorie.reducer;
