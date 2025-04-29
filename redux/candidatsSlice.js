import { createSlice } from "@reduxjs/toolkit";

const Candidats = [
  {
    key: 1,
    nom: "ADELEKE",
    prenom: "hanane",
    email: "adeleke.hanan@gmail.com",
    telephone: "0758246730",
    description: `Terminé mes etudes supérieures avec un Bac+3, je suis un passionne de la technologie web et mobile. J'exerce dans le développement d'application web et mobile.De part mon experience dans les cabinets informatiques et des sociétés dans lesquelles j'ai ouvré dans la conception des sites web et des applications mobiles; j'ai acquis en experience avec PHP couplé à Laravel, Dart couplé à Flutter et ReactJs et ReactNative couplé au Javascript, TypeScript.`,
  },
  {
    key: 2,
    nom: "Tiktok",
    prenom: "reseau",
    email: "titok@gmail.com",
    telephone: "0454545474",
    description: `Terminé mes etudes supérieures avec un Bac+3, je suis un passionne de la technologie web et mobile. J'exerce dans le développement d'application web et mobile.De part mon experience dans les cabinets informatiques et des sociétés dans lesquelles j'ai ouvré dans la conception des sites web et des applications mobiles; j'ai acquis en experience avec PHP couplé à Laravel, Dart couplé à Flutter et ReactJs et ReactNative couplé au Javascript, TypeScript.`,
  },
];

const candidatSlice = createSlice({
  name: "Candidats",
  initialState: {
    liste: Candidats,
  },

  reducers: {
    ajouterCandidat: (state, action) => {
      state.liste.push(
        { ...action.payload, key: state.liste.length + 1 } // pour l'identifiant unique
      );
    },
  },
});

export const { ajouterCandidat } = candidatSlice.actions;
export default candidatSlice.reducer;
