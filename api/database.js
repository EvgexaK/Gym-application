import * as firebase from "firebase";

class Database {
    static getExercises() {
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {
            console.log(snap.val());
        })
    }
}

module.exports = Database;