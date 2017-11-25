import * as firebase from "firebase";

class Database {
    static getExercises(callback) {
        console.log('getExercises')
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {
            callback(snap.val())
        })
    }

    static getMachines(callback) {
        console.log('getMachines')
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {
            callback(snap.val())
        })
    }
}

module.exports = Database;
