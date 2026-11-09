"use strict";

// Slide 46 : Déclaration des fonctions

// Slide 39 : Création et utilisation d'un tableau
// Slide 45 : Parcours du tableau avec forEach
function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    etudiants.forEach(function(etudiant) {
        console.log(etudiant);
    });
}

// Slide 40 : Création et utilisation d'un objet
function f2() {
    let etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);
}

// Slide 41 : Tableau d'objets
// Slide 45 : Parcours du tableau avec forEach
function f3() {
    let etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    etudiants.forEach(function(etudiant) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    });
}