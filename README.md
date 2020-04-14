# Projet CHAPTOUKAEV-KHORN - Cas et témoignages d'objets célestes non identifiés
Projet réalisé en Angular dans le cadre de la 2ème année de Master MBDS.

En cas de problème, vous pouvez nous contacter sur  :
 - Hava CHAPTOUKAEV : avachap87@yahoo.fr
 - Anaïs KHORN : anais.khorn@gmail.com


## Prérequis

 - MongoDB
 - NodeJS
 - Angular

## Installation

### Installation des données

Nous avons décidé d'utiliser MongoDB Compass pour installer les fichiers .csv dans la base de données.
Vous allez pouvoir trouver ces fichiers dans /src/files. 

Voici les étapes à suivre :

 1. Créer une database dans le logiciel, nous avons nommé celle-ci : **db**.
 2. Créer une première collection : **cas** avec le fichier *cas_pub2.csv*.
 3. Créer une deuxième collection : **temoignages** avec le fichier *temoignages_pub2.csv*.
 
 Vous devriez obtenir ceci :
[![Image](https://i.goopics.net/0Glg3.png)](https://goopics.net/i/0Glg3)

## Utilisation

Pour mener à bien votre expérience, veuillez suivre ces étapes :

 1.  Dans une première console, vous devez aller dans la racine du projet et lancer pour résoudre les éventuels problèmes de dépendances :

      npm install
    
    

 2. Dans une deuxième console, veuillez lancer cette commande :
 

    mongod

 3. Dans une troisième console, veuillez vous rendre dans le dossier src du projet et lancer le serveur via cette commande :
 

    node ./serverCrudWithMongo.js

 4. Dans une autre console, veuillez aller dans le dossier du fichier et lancer cette commande :

    ng serve

Si tout s'est déroulé sans accro, vous allez pouvoir vous rendre sur ce lien :

    http://localhost:4200/


Vous devriez voir ceci :
[![Image](https://i.goopics.net/XbemV.png)](https://goopics.net/i/XbemV)

### Recherche
Sur cette page, vous allez pouvoir faire la recherche par 3 moyens :

 - Par mot-clé
 - Par type
 - Par date (année)

### Accès à un cas
Pour accéder à un cas, veuillez cliquer sur son id.

[![Image](https://i.goopics.net/GwlOv.png)](https://goopics.net/i/GwlOv)

### Accès aux témoignages associés au cas spécifié
Pour accéder aux témoignages, veuiller cliquer sur la case de la colonne **Nb de témoignages**.
NB : Même si aucun chiffre n'est affiché un témoignage peut néanmoins exister, donc n'hésitez pas à cliquer ;)

[![Image](https://i.goopics.net/9ol3l.png)](https://goopics.net/i/9ol3l)

    
## Statistiques
Veuillez cliquer sur l'onglet **Statistiques** de la navbar pour accèder aux statistiques.

### 1er graphique : Nombre de cas par type
Vous pouvez trouver ici un graphique déterminant le nombre de cas par son type. 
Le graphique est intéractif avec le filtre sur le département, vous pouvez donc obtenir le nombre pour chaque type de cas pour le département sélectionné.

[![Image](https://i.goopics.net/yxedb.png)](https://goopics.net/i/yxedb)

## Conclusion
Quant à la question si nous avons été visité ou pas, nous n'avons pas de réelle réponse.
En effet, la base de données du GEIPAN est très difficile à analyser avec son grand nombre de champs.
Les données les plus vieilles pouvant dater des années 50, les technologies utilisaient ne sont pas forcément les même utilisées qu'actuellement. 
Sur le site,  nous pouvons voir que certains cas qui avaient été classé en D, ont été reconsidéré en cas A, B ou bien C plusieurs années plus tard.
Finalement, beaucoup de champs sont incomplets et nous ne pouvons donc pas répondre à la question.

