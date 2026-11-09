"use strict";

// Slide 39 : Tableau contenant les données des étudiants
let Students = [
    [1000, "JOHN", "DOE", 14.5],
    [2000, "BOB", "CARLTON", 7.1],
    [3000, "RAYANE", "SMITH", 13.3]
];

// Slide 46 : Fonction A qui appelle la fonction B
// Slide 45 : Parcours du tableau avec une boucle for
function A() {
    for (let i = 0; i < Students.length; i++) {

        // Appel de B avec la note de l'étudiant
        let resultat = B(Students[i][3]);

        // Slide 43 : Condition if/else
        if (resultat) {
            console.log(Students[i][0] + ": ADMIS");
        } else {
            console.log(Students[i][0] + ": AJOURNÉ");
        }
    }
}

// Slide 46 : Fonction B avec un seul paramètre de type nombre
// Slide 43 : Retourne true si la note est supérieure ou égale à 10
function B(note) {
    return note >= 10;
}