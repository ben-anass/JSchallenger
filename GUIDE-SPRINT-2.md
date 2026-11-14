# GUIDE SPRINT 2 --- JavaScript & DOM

**YouCode Hub · A1 2026/2027**\
**Source :** Série d'exercices Sprint 2 fournie par l'apprenant.\
**Organisation :** chaque exercice se travaille dans son dossier
`sprint2-js/XX-nom/`.

> Ce guide rassemble les consignes, étapes et critères de réussite des
> 20 exercices. Il sert de référence locale pendant le travail. Il ne
> contient pas les solutions complètes : le but est de coder, tester et
> comprendre chaque notion.

## Organisation du projet

``` text
project/
├── GUIDE-SPRINT-2.md
├── project-report.txt
└── sprint2-js/
    ├── 01-carte-produit/
    │   ├── index.html
    │   └── main.js
    ├── 02-trois-facons/
    │   ├── index.html
    │   └── main.js
    ├── 03-badge-stock/
    │   ├── index.html
    │   └── main.js
    ├── 04-calculateur-ttc/
    │   ├── index.html
    │   └── main.js
    ├── 05-compteur-clics/
    │   ├── index.html
    │   └── main.js
    ├── 06-ajouter-note/
    │   ├── index.html
    │   └── main.js
    ├── 07-liste-courses/
    │   ├── index.html
    │   └── main.js
    ├── 08-selection-multiple/
    │   ├── index.html
    │   └── main.js
    ├── 09-fiches-produits/
    │   ├── index.html
    │   └── main.js
    ├── 10-text-vs-innerhtml/
    │   ├── index.html
    │   └── main.js
    ├── 11-compteur-caracteres/
    │   ├── index.html
    │   └── main.js
    ├── 12-etiquettes-map/
    │   ├── index.html
    │   └── main.js
    ├── 13-filtrer-catalogue/
    │   ├── index.html
    │   └── main.js
    ├── 14-palette-dataset/
    │   ├── index.html
    │   └── main.js
    ├── 15-quelle-methode/
    │   ├── index.html
    │   └── main.js
    ├── 16-un-seul-ecouteur/
    │   ├── index.html
    │   └── main.js
    ├── 17-panier-reduce/
    │   ├── index.html
    │   └── main.js
    ├── 18-ajout-produit-form/
    │   ├── index.html
    │   └── main.js
    ├── 19-taches-localstorage/
    │   ├── index.html
    │   └── main.js
    └── 20-gestionnaire-depenses/
        ├── index.html
        └── main.js
```

## Suivi d'avancement

Coche une case seulement après avoir exécuté le projet et vérifié les
critères de réussite.

-   [ ] 01 --- Ma première carte produit
-   [ ] 02 --- Trois façons de viser un élément
-   [ ] 03 --- Badge de stock
-   [ ] 04 --- Calculateur de prix TTC
-   [ ] 05 --- Compteur de clics
-   [ ] 06 --- Ajouter une note
-   [ ] 07 --- Liste de courses depuis un tableau
-   [ ] 08 --- Sélection multiple : NodeList ou HTMLCollection
-   [ ] 09 --- Fiches produits depuis des objets
-   [ ] 10 --- textContent ou innerHTML ?
-   [ ] 11 --- Compteur de caractères
-   [ ] 12 --- Étiquettes de prix avec map
-   [ ] 13 --- Filtrer un catalogue
-   [ ] 14 --- Palette de couleurs avec dataset
-   [ ] 15 --- Quelle méthode choisir ?
-   [ ] 16 --- Un seul écouteur pour toutes les cartes
-   [ ] 17 --- Panier : total avec reduce
-   [ ] 18 --- Ajouter un produit par formulaire
-   [ ] 19 --- Tâches qui survivent au rechargement
-   [ ] 20 --- Mini gestionnaire de dépenses

------------------------------------------------------------------------

## 01 --- Ma première carte produit

**Dossier :** `sprint2-js/01-carte-produit/`\
**Notions :** variables, `const`, `let`, `textContent`,
`getElementById`.

### HTML de départ

La page contient un `<h1 id="nom">` et un `<p id="prix">`. Le script
`main.js` est chargé avec `defer`.

### Travail à réaliser

1.  Créer `main.js` à côté de `index.html`.
2.  Écrire `console.log('JS connecté')` et vérifier le message dans la
    console du navigateur.
3.  Déclarer `const nom = 'Clavier'`.
4.  Déclarer `let prix = 250`.
5.  Récupérer les éléments `nom` et `prix` avec `getElementById`.
6.  Afficher le nom et le prix suivi de `DH` avec `textContent`.
7.  Modifier `prix` à `199` et afficher le nouveau prix.
8.  Essayer de réassigner `nom`, puis lire l'erreur dans la console.

### Réussite

-   [ ] Le message « JS connecté » apparaît dans la console.
-   [ ] La page affiche « Clavier » et « 199 DH ».
-   [ ] `nom` est déclaré avec `const` et `prix` avec `let`.
-   [ ] Tu peux expliquer pourquoi réassigner `nom` provoque une erreur.

------------------------------------------------------------------------

## 02 --- Trois façons de viser un élément

**Dossier :** `sprint2-js/02-trois-facons/`\
**Notions :** `querySelector`, `getElementById`, `textContent`, `const`.

### HTML attendu dans le body

Un `<h1 id="titre">`, un `<p class="intro">` et un `<footer>`.

### Travail à réaliser

1.  Récupérer le `h1` par son id avec `querySelector`.
2.  Récupérer le paragraphe par sa classe.
3.  Récupérer le footer par son nom de balise.
4.  Écrire un texte de ton choix dans chacun avec `textContent`.
5.  Récupérer aussi le h1 avec `getElementById` et comparer les deux
    écritures.
6.  Remplacer volontairement `.intro` par `intro`, afficher le résultat
    avec `console.log` et observer ce qui se passe.

### Réussite

-   [ ] Les trois éléments affichent un texte.
-   [ ] Les sélecteurs `#`, `.` et le nom de balise sont utilisés avec
    `querySelector`.
-   [ ] Tu peux expliquer pourquoi `querySelector('intro')` renvoie
    `null`.
-   [ ] Tu sais dire quand `getElementById` suffit.

------------------------------------------------------------------------

## 03 --- Badge de stock

**Dossier :** `sprint2-js/03-badge-stock/`\
**Notions :** `if/else`, opérateur ternaire, `const`, `querySelector`,
`textContent`, `classList`.

### HTML attendu

Un élément `span` avec `id="badge"` et les classes Tailwind nécessaires
à son affichage.

### Travail à réaliser

1.  Déclarer `const stock = 0` et récupérer `#badge`.
2.  Avec `if/else`, afficher « Disponible » si le stock est supérieur à
    zéro, sinon « Rupture ».
3.  Ajouter une classe verte au badge disponible et rouge au badge en
    rupture.
4.  Tester avec `stock = 0`, puis `stock = 5`.
5.  Réécrire le choix du texte avec un opérateur ternaire.
6.  Ajouter le cas « Presque épuisé » lorsque le stock est entre 1 et 3,
    avec une classe jaune.

### Réussite

-   [ ] Les cas 0, 2 et 5 affichent respectivement « Rupture », «
    Presque épuisé » et « Disponible ».
-   [ ] L'opérateur ternaire est utilisé pour le choix du texte.
-   [ ] Les classes sont gérées avec `classList`.
-   [ ] Les conditions sont dans le bon ordre.

------------------------------------------------------------------------

## 04 --- Calculateur de prix TTC

**Dossier :** `sprint2-js/04-calculateur-ttc/`\
**Notions :** fonctions, fonction fléchée, `const`, `querySelector`,
`textContent`.

### Travail à réaliser

1.  Créer `calculerTTC(prixHT)` qui retourne le prix TTC avec une TVA de
    20 %.
2.  Vérifier dans la console que `calculerTTC(100)` donne `120`.
3.  Créer `afficherPrix(selector, prixHT)` : récupérer l'élément avec
    `querySelector` et afficher le prix HT et TTC.
4.  Appeler cette fonction avec 100, 45 et 320 sur les éléments prévus
    dans le HTML.
5.  Réécrire `calculerTTC` sous forme de fonction fléchée.
6.  Retirer temporairement `return` et observer pourquoi le résultat
    devient `undefined`.

### Réussite

-   [ ] La fonction calcule correctement la TVA de 20 %.
-   [ ] Les trois prix sont affichés.
-   [ ] La fonction fléchée fonctionne.
-   [ ] Tu peux expliquer le rôle de `return` et le résultat
    `undefined`.

------------------------------------------------------------------------

## 05 --- Compteur de clics

**Dossier :** `sprint2-js/05-compteur-clics/`\
**Notions :** `addEventListener`, `let`, fonctions, `querySelector`,
`textContent`, `if/else`.

### HTML attendu

Un affichage du compteur et trois boutons : plus, moins et reset.

### Travail à réaliser

1.  Déclarer un compteur avec `let`, initialisé à 0.
2.  Récupérer les éléments nécessaires avec `querySelector`.
3.  Créer une fonction `afficher()` qui met à jour le texte du compteur.
4.  Ajouter un écouteur de clic au bouton plus pour augmenter le
    compteur.
5.  Ajouter un écouteur au bouton moins pour le diminuer, sans jamais
    descendre sous 0.
6.  Ajouter un bouton reset qui remet le compteur à 0.
7.  Tester la différence entre passer `afficher()` et passer `afficher`
    à `addEventListener`.

### Réussite

-   [ ] Le compteur commence à 0.
-   [ ] Les boutons +, − et reset fonctionnent.
-   [ ] Le compteur ne devient jamais négatif.
-   [ ] Tu peux expliquer pourquoi on passe `afficher` sans parenthèses
    à l'écouteur.

------------------------------------------------------------------------

## 06 --- Ajouter une note

**Dossier :** `sprint2-js/06-ajouter-note/`\
**Notions :** `createElement`, `appendChild`, `textContent`,
`addEventListener`.

### HTML attendu

Une liste et un bouton permettant d'ajouter une note.

### Travail à réaliser

1.  Récupérer la liste et le bouton.
2.  Initialiser un numéro de note.
3.  Au clic, créer un élément `li` avec `document.createElement`.
4.  Donner au `li` le texte « Note n° X » avec `textContent`.
5.  Ajouter les classes Tailwind demandées.
6.  Afficher le `li` dans la console avant et après son insertion.
7.  Ajouter le `li` à la liste avec `appendChild`.
8.  Bonus : essayer `prepend` pour ajouter au début.

### Réussite

-   [ ] Chaque clic ajoute une nouvelle note.
-   [ ] Le numéro augmente correctement.
-   [ ] Les éléments sont créés avec `createElement` et insérés dans la
    liste.
-   [ ] Tu comprends la différence entre créer un élément et l'ajouter
    au DOM.

------------------------------------------------------------------------

## 07 --- Liste de courses depuis un tableau

**Dossier :** `sprint2-js/07-liste-courses/`\
**Notions :** tableaux, `for`, `forEach`, `createElement`,
`appendChild`.

### Données de départ

`courses = ['Pain', 'Lait', 'Œufs', 'Tomates']`.

### Travail à réaliser

1.  Afficher dans la console le premier élément, le dernier élément et
    la longueur du tableau.
2.  Afficher le nombre total d'articles dans la page.
3.  Créer un `li` pour chaque course avec une boucle `for`.
4.  Commenter cette boucle et refaire le rendu avec `forEach`.
5.  Ajouter « Café » au tableau avec `push`.
6.  Afficher les courses avec une numérotation.

### Réussite

-   [ ] Les quatre courses initiales sont affichées.
-   [ ] Le total est calculé à partir de la longueur du tableau.
-   [ ] Le rendu fonctionne avec `for`, puis avec `forEach`.
-   [ ] Après `push`, Café apparaît aussi.

------------------------------------------------------------------------

## 08 --- Sélection multiple : NodeList ou HTMLCollection

**Dossier :** `sprint2-js/08-selection-multiple/`\
**Notions :** `querySelectorAll`, `getElementsByClassName`,
`getElementsByName`, `forEach`, `classList`.

### HTML attendu

Trois paragraphes de classe `note`, des boutons radio portant
`name="theme"` et des boutons pour lancer les actions.

### Travail à réaliser

1.  Récupérer les paragraphes avec `querySelectorAll`.
2.  Récupérer les mêmes éléments avec `getElementsByClassName`.
3.  Récupérer les radios avec `getElementsByName`.
4.  Utiliser `forEach` pour mettre en évidence les paragraphes avec
    `classList`.
5.  Essayer `forEach` sur la collection HTML et observer l'erreur ;
    trouver une manière de parcourir cette collection.
6.  Lire et afficher le thème du bouton radio coché.
7.  Ajouter un quatrième paragraphe et comparer les tailles des
    collections.

### Réussite

-   [ ] Les paragraphes sont sélectionnés et mis en évidence.
-   [ ] Le thème coché est correctement identifié.
-   [ ] Tu peux expliquer la différence entre NodeList et HTMLCollection
    observée dans l'exercice.
-   [ ] Tu constates le comportement des collections après l'ajout d'un
    élément.

------------------------------------------------------------------------

## 09 --- Fiches produits depuis des objets

**Dossier :** `sprint2-js/09-fiches-produits/`\
**Notions :** objets, tableaux, fonctions, `forEach`, `createElement`,
`textContent`.

### Données de départ

``` js
const produits = [
  { id: 1, nom: 'Clavier', prix: 250, stock: 4 },
  { id: 2, nom: 'Souris', prix: 90, stock: 0 },
  { id: 3, nom: 'Écran', prix: 1400, stock: 2 }
];
```

### Travail à réaliser

1.  Accéder au deuxième produit et au prix du dernier produit.
2.  Créer `creerFiche(produit)` qui retourne un élément `article`.
3.  Dans cet article, créer un `h2` pour le nom et un `p` pour le prix.
4.  Ajouter les classes de style prévues.
5.  Parcourir les produits avec `forEach` et afficher les fiches.
6.  Si le stock vaut 0, afficher « Rupture » en rouge.
7.  Réécrire la fonction en utilisant la déstructuration.

### Réussite

-   [ ] Les trois fiches produits sont affichées.
-   [ ] Le nom et le prix de chaque produit sont corrects.
-   [ ] Le produit sans stock affiche « Rupture » en rouge.
-   [ ] Tu sais accéder aux propriétés d'un objet et utiliser la
    déstructuration.

------------------------------------------------------------------------

## 10 --- textContent ou innerHTML ?

**Dossier :** `sprint2-js/10-text-vs-innerhtml/`\
**Notions :** `textContent`, `innerHTML`, événements, sécurité.

### Travail à réaliser

1.  Prévoir deux zones d'affichage et un bouton.
2.  Utiliser le message
    `'<strong>Promo</strong> : -20 % sur les claviers'`.
3.  Au clic, écrire ce message dans la première zone avec `textContent`
    et dans la deuxième avec `innerHTML`.
4.  Observer la différence : texte brut ou interprétation de la balise
    HTML.
5.  Tester localement la chaîne de démonstration
    `<img src=x onerror="alert(1)">` et observer le comportement.
6.  Ajouter « Fin » avec `innerHTML +=` et inspecter le résultat.
7.  Écrire en commentaire quand utiliser `textContent` et pourquoi se
    méfier de `innerHTML`.

### Réussite

-   [ ] Tu observes la différence entre texte brut et HTML interprété.
-   [ ] Tu peux expliquer le risque lié à l'insertion de contenu non
    fiable avec `innerHTML`.
-   [ ] Tu sais choisir `textContent` pour afficher du texte
    utilisateur.

**Sécurité :** le test `onerror` est une démonstration XSS à effectuer
uniquement dans ta page locale d'exercice. N'utilise jamais `innerHTML`
avec du contenu utilisateur ou non fiable en production.

------------------------------------------------------------------------

## 11 --- Compteur de caractères

**Dossier :** `sprint2-js/11-compteur-caracteres/`\
**Notions :** champ de saisie, `input`, `addEventListener`,
`textContent`, `if/else`, Tailwind.

### HTML attendu

Un `textarea` avec `id="message"`, un compteur `id="compteur"` et un
bouton `id="envoyer"`.

### Travail à réaliser

1.  Écouter l'événement `input` sur `#message`.
2.  À chaque frappe, afficher `X / 50` dans `#compteur`.
3.  Au-delà de 50 caractères, passer le compteur en rouge
    (`text-red-600`) ; en dessous, le remettre en gris.
4.  Désactiver `#envoyer` tant que le message est vide ou trop long.
5.  Remplacer temporairement `input` par `change`, observer le moment de
    mise à jour et noter la différence.
6.  Ne pas compter les espaces au début et à la fin.

### Réussite

-   [ ] Le compteur se met à jour à chaque frappe.
-   [ ] La couleur change au 51e caractère et revient en dessous.
-   [ ] Le bouton est désactivé si le message est vide, blanc ou trop
    long.
-   [ ] Tu peux expliquer la différence entre `input` et `change`.

------------------------------------------------------------------------

## 12 --- Étiquettes de prix avec map

**Dossier :** `sprint2-js/12-etiquettes-map/`\
**Notions :** `map`, `forEach`, tableaux, objets, `createElement`,
`textContent`.

### Données de départ

``` js
const produits = [
  { nom: 'Clavier', prixHT: 250 },
  { nom: 'Souris', prixHT: 90 },
  { nom: 'Écran', prixHT: 1400 }
];
```

### Travail à réaliser

1.  Avec `map`, créer un tableau `noms` contenant seulement les noms et
    l'afficher dans la console.
2.  Avec `map`, créer `produitsTTC` : chaque objet conserve ses
    propriétés et gagne `prixTTC` avec une TVA de 20 %.
3.  Vérifier dans la console que le tableau `produits` d'origine n'a pas
    changé.
4.  Avec `map`, créer un tableau `textes` de libellés comme « Clavier :
    300 DH TTC ».
5.  Afficher chaque texte dans un `li` de `#etiquettes`.
6.  Refaire l'étape 1 avec `forEach` en stockant le résultat dans une
    variable, puis noter son contenu.

### Réussite

-   [ ] `noms`, `produitsTTC` et `textes` contiennent chacun trois
    éléments.
-   [ ] Le tableau `produits` reste inchangé.
-   [ ] Les trois étiquettes s'affichent.
-   [ ] Tu peux expliquer pourquoi `forEach` renvoie `undefined` et
    quand choisir `map`.

------------------------------------------------------------------------

## 13 --- Filtrer un catalogue

**Dossier :** `sprint2-js/13-filtrer-catalogue/`\
**Notions :** `filter`, fonctions, tableaux, objets, `addEventListener`,
`forEach`.

### Données de départ

``` js
const produits = [
  { nom: 'Clavier', prix: 250, stock: 4 },
  { nom: 'Souris', prix: 90, stock: 0 },
  { nom: 'Écran', prix: 1400, stock: 2 },
  { nom: 'Tapis', prix: 60, stock: 12 }
];
```

### HTML attendu

Quatre boutons : `#tous`, `#stock`, `#petitPrix`, `#combo`, et une liste
`#liste`.

### Travail à réaliser

1.  Écrire `afficher(tableau)` : vider `#liste`, puis afficher un `li`
    par produit sous la forme nom -- prix DH.
2.  Au chargement, afficher tous les produits.
3.  Au clic sur `#stock`, afficher uniquement les produits dont le stock
    est supérieur à 0.
4.  Au clic sur `#petitPrix`, afficher uniquement ceux dont le prix est
    inférieur à 200 DH.
5.  `#combo` combine les deux conditions.
6.  `#tous` réaffiche tous les produits.
7.  Vérifier dans la console que `produits` conserve toujours ses quatre
    éléments.

### Réussite

-   [ ] Les boutons affichent respectivement 4, 3, 2 et 1 produits.
-   [ ] La liste est vidée avant chaque affichage.
-   [ ] Le tableau `produits` n'est jamais modifié.
-   [ ] Une seule fonction `afficher` sert à tous les boutons.
-   [ ] Le filtre combiné tient dans une seule condition.

------------------------------------------------------------------------

## 14 --- Palette de couleurs avec dataset

**Dossier :** `sprint2-js/14-palette-dataset/`\
**Notions :** `dataset`, `querySelectorAll`, `forEach`,
`addEventListener`, classes Tailwind, `textContent`.

### Travail à réaliser

1.  Préparer plusieurs boutons contenant `data-couleur` et `data-nom`.
2.  Récupérer tous les boutons avec `querySelectorAll`.
3.  Ajouter un écouteur de clic à chaque bouton avec `forEach`.
4.  Au clic, appliquer la couleur au bloc de prévisualisation et mettre
    à jour les informations affichées.
5.  Faire en sorte qu'une seule couleur soit active à la fois.
6.  Ajouter un bouton Jaune uniquement dans le HTML et faire en sorte
    qu'il fonctionne sans ajouter un écouteur spécifique.
7.  Ajouter `data-prix-unitaire` à un bouton et lire cette donnée via
    `dataset.prixUnitaire`.

### Réussite

-   [ ] Chaque bouton applique la bonne couleur.
-   [ ] Le nom affiché correspond à la couleur choisie.
-   [ ] Une seule couleur est active à la fois.
-   [ ] Le bouton Jaune ajouté dans le HTML fonctionne.
-   [ ] Tu peux expliquer la conversion de `data-prix-unitaire` en
    `dataset.prixUnitaire`.

------------------------------------------------------------------------

## 15 --- Quelle méthode choisir ?

**Dossier :** `sprint2-js/15-quelle-methode/`\
**Notions :** `find`, `filter`, `some`, `every`, `map`, tableaux.

### Travail à réaliser

À partir du tableau de produits fourni dans l'exercice : 1. Créer un
bouton dont le `dataset` permet de rechercher le produit d'id 3 avec
`find`. 2. Créer un bouton qui affiche les produits dont le stock vaut 0
avec `filter`. 3. Créer un bouton qui vérifie s'il existe au moins un
produit sans stock avec `some`. 4. Créer un bouton qui vérifie si tous
les produits coûtent moins de 2 000 DH avec `every`. 5. Ajouter un
cinquième cas de recherche sans résultat et afficher un message adapté.
6. Ne pas utiliser de boucle `for`.

### Réussite

-   [ ] `find` retrouve un seul élément ou `undefined`.
-   [ ] `filter` renvoie un tableau.
-   [ ] `some` et `every` renvoient un booléen.
-   [ ] Le cas sans résultat est géré proprement.
-   [ ] Tu peux expliquer le type de retour de chaque méthode.

------------------------------------------------------------------------

## 16 --- Un seul écouteur pour toutes les cartes

**Dossier :** `sprint2-js/16-un-seul-ecouteur/`\
**Notions :** `closest`, `dataset`, `addEventListener`, `find`,
`filter`, `createElement`.

### Travail à réaliser

1.  Générer les cartes produits depuis le tableau de données.
2.  Ajouter un `data-id` à chaque carte ou bouton d'action selon la
    structure demandée.
3.  Chaque carte propose les actions « Détail » et « Supprimer ».
4.  Installer un seul écouteur de clic sur le conteneur `#cartes`.
5.  Utiliser `closest` pour retrouver le bouton d'action, même si le
    clic touche une icône à l'intérieur.
6.  Pour « Détail », retrouver le produit avec `find`.
7.  Pour « Supprimer », retirer le produit du tableau avec `filter`,
    puis refaire le rendu.
8.  Ignorer les clics qui ne concernent pas un bouton d'action.
9.  Convertir l'id lu dans `dataset` en nombre si nécessaire.

### Réussite

-   [ ] Les détails du bon produit s'affichent.
-   [ ] La suppression fonctionne et le rendu est actualisé.
-   [ ] Un clic sur une icône interne déclenche la bonne action.
-   [ ] Un clic ailleurs ne déclenche aucune action.
-   [ ] Un seul écouteur est installé sur `#cartes`.
-   [ ] Tu peux expliquer `event.target` et `closest`.

------------------------------------------------------------------------

## 17 --- Panier : total avec reduce

**Dossier :** `sprint2-js/17-panier-reduce/`\
**Notions :** `reduce`, tableaux, objets, `closest`, `dataset`, `find`.

### Données initiales

``` js
const panier = [
  { id: 1, nom: 'Clavier', prix: 250, quantite: 1 },
  { id: 2, nom: 'Souris', prix: 90, quantite: 2 },
  { id: 3, nom: 'Câble', prix: 35, quantite: 3 }
];
```

### Travail à réaliser

1.  Afficher une ligne par produit avec prix unitaire, quantité et
    sous-total.
2.  Ajouter des boutons + et − pour modifier les quantités.
3.  Calculer le total du panier avec `reduce` et une valeur initiale.
4.  Calculer le nombre total d'articles avec `reduce`.
5.  Utiliser un seul écouteur de clic pour les actions du panier.
6.  Retrouver le produit concerné avec `find` et les informations
    `dataset`.
7.  Supprimer une ligne lorsque sa quantité atteint 0.
8.  Afficher un message si le panier est vide et conserver un total de
    0.

### Réussite

-   [ ] Le panier initial contient 6 articles.
-   [ ] Le total initial est de 535 DH.
-   [ ] Les boutons + et − mettent à jour les quantités, sous-totaux et
    total.
-   [ ] Une ligne disparaît lorsque sa quantité atteint 0.
-   [ ] Le panier vide affiche un message et un total de 0.
-   [ ] Les calculs de total utilisent `reduce`.

------------------------------------------------------------------------

## 18 --- Ajouter un produit par formulaire

**Dossier :** `sprint2-js/18-ajout-produit-form/`\
**Notions :** formulaires, `preventDefault`, spread, `some`, objets,
tableaux.

### HTML attendu

Un formulaire avec les champs nom, prix et catégorie, ainsi qu'une zone
pour afficher les erreurs et la liste des produits.

### Travail à réaliser

1.  Écouter l'événement `submit` du formulaire.
2.  Appeler `preventDefault` pour empêcher le rechargement de la page.
3.  Récupérer et valider les champs : aucun champ vide et prix
    strictement positif.
4.  Refuser un nom de produit déjà présent, sans tenir compte des
    majuscules/minuscules, avec `some`.
5.  Construire un nouvel objet produit.
6.  Ajouter le produit avec le spread : `[...produits, nouveau]` (ne pas
    utiliser `push`).
7.  Réafficher la liste, réinitialiser le formulaire et remettre le
    focus sur le champ nom.
8.  Effacer le message d'erreur après une validation réussie.

### Réussite

-   [ ] Le formulaire ne recharge pas la page.
-   [ ] Les champs vides et les prix non positifs sont refusés.
-   [ ] Les doublons sont détectés sans tenir compte de la casse.
-   [ ] Le tableau est mis à jour avec le spread.
-   [ ] La liste est réaffichée et le formulaire est réinitialisé après
    succès.

------------------------------------------------------------------------

## 19 --- Tâches qui survivent au rechargement

**Dossier :** `sprint2-js/19-taches-localstorage/`\
**Notions :** `localStorage`, `JSON.stringify`, `JSON.parse`, tableaux,
objets, formulaires.

### Structure d'une tâche

Chaque tâche est un objet `{ id, titre, faite }`.

### Travail à réaliser

1.  Charger les tâches depuis `localStorage` au démarrage ; utiliser un
    tableau vide si aucune donnée n'est enregistrée.
2.  Ajouter une tâche depuis le formulaire.
3.  Permettre de marquer une tâche comme faite ou non faite.
4.  Permettre de supprimer une tâche.
5.  Enregistrer les données après chaque modification avec
    `JSON.stringify`.
6.  Utiliser `JSON.parse` pour récupérer les données sauvegardées.
7.  Ajouter une action pour tout effacer.
8.  Inspecter les données dans l'onglet Application des outils
    développeur.
9.  Garder une seule fonction responsable de la sauvegarde.

### Réussite

-   [ ] Une tâche peut être ajoutée, cochée/décochée et supprimée.
-   [ ] Les changements sont sauvegardés après chaque modification.
-   [ ] Les tâches restent présentes après rechargement.
-   [ ] L'action « tout effacer » fonctionne.
-   [ ] Une seule fonction centralise la sauvegarde.

------------------------------------------------------------------------

## 20 --- Mini gestionnaire de dépenses

**Dossier :** `sprint2-js/20-gestionnaire-depenses/`\
**Notions :** `querySelector`, `createElement`, `dataset`, `closest`,
formulaires, `preventDefault`.

### Travail à réaliser

1.  Préparer un formulaire pour ajouter une dépense et valider les
    champs.
2.  Créer et afficher une ligne pour chaque dépense.
3.  Permettre de supprimer une dépense.
4.  Au clic sur une dépense, basculer son état « remboursée » et
    appliquer un texte barré.
5.  Ajouter des filtres par catégorie.
6.  Ajouter une recherche en direct.
7.  Afficher le total des dépenses.
8.  Persister les données afin qu'elles survivent au rechargement.
9.  Utiliser un seul écouteur sur `#liste` pour les actions des lignes.
10. Utiliser `closest` et `dataset` pour identifier l'action et la
    dépense.
11. Utiliser `textContent` pour afficher les valeurs saisies par
    l'utilisateur.
12. Séparer clairement les données (état), le rendu et les événements.

### Réussite

-   [ ] Une dépense peut être ajoutée après validation.
-   [ ] Une dépense peut être supprimée.
-   [ ] Son état remboursé/non remboursé peut être basculé.
-   [ ] Les filtres et la recherche fonctionnent.
-   [ ] Le total est actualisé.
-   [ ] Les données persistent après rechargement.
-   [ ] Un seul écouteur gère les actions de la liste.
-   [ ] Les données utilisateur sont affichées avec `textContent`.

------------------------------------------------------------------------

## Méthode de travail conseillée

Pour chaque exercice : 1. Ouvre le dossier correspondant dans VS Code.
2. Travaille uniquement dans son `index.html` et son `main.js`. 3. Lance
`index.html` avec Live Server. 4. Teste le résultat dans le navigateur
et regarde la console. 5. Coche les critères de réussite uniquement
quand ils sont vérifiés. 6. Envoie ton `main.js` et, si nécessaire, ton
`index.html` pour une correction avant de passer à l'exercice suivant.

**Règle :** ne passe pas à l'exercice suivant simplement parce que le
code s'exécute. Il faut aussi comprendre les notions et valider les
critères.
