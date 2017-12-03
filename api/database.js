import * as firebase from "firebase";

class Database {
    static getExercises(callback) {
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {
            callback(snap.val())
        })
    }

    static getMachines(callback) {
        let ref = firebase.database().ref().child('Equipments');
        ref.on('value', (snap) => {
            callback(snap.val())
            console.log(snap.val())
        })
    }
}

module.exports = Database;
