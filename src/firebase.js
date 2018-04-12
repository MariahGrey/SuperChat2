import * as firebase from "firebase";

export const config = {
  apiKey: `AIzaSyDwYY2bAfEI6FWFcoTVqanITe5P2PU_fB8`,
  databaseURL: `https://devtree-super-chat.firebaseio.com/`
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
