var firebase = require("firebase-admin")

var serviceAccount = require('./serviceAccountKey.json')

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://nasa-data.firebaseio.com"
})

var db = firebase.database();
var ref = db.ref(db.ref("restricted_access/secret_document") ref.once("value", function(snapshot) {
            console.log(snapshot.val());
        })

        var usersRef = ref.child("users"); usersRef.set({
            marquis: {
                date_of_birth: "November 23, 1990",
                full_name: "Marquis Parks"
            },

            quis: {
                date_of_birth: "November 8, 1990",
                full_name: "=Marquis Parks"

            }

        })