
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "YOUR KEY",
            authDomain: "YOUR KEY",
            databaseURL: "YOUR KEY",
            storageBucket: "YOUR KEY",
            messagingSenderId: "YOUR KEY"
        });
    }

}

module.exports = Firebase;