import * as firebase from "firebase";

class Database {
    static getExercises(callback) {
        console.log(11111111)
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {
            console.log(snap.val());
            callback(snap.val())
        })
    }
}

module.exports = Database;