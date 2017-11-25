import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCzbhh4xn5m3cz7OZ7Ncx2lAavf06vCfs8',
  authDomain: 'gym-app-fbf4a.firebaseapp.com',
  databaseURL: 'https://gym-app-fbf4a.firebaseio.com',
  projectId: 'gym-app-fbf4a',
  storageBucket: 'gym-app-fbf4a.appspot.com',
  messagingSenderId: '237601363803',
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
