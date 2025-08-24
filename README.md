# Timer de Billard Pro 🎱


[![Netlify Status](https://api.netlify.com/api/v1/badges/af3ace2a-b6cd-433a-8280-d69a7f6df9b7/deploy-status)](https://app.netlify.com/projects/pooltimer/deploys)


[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![État du projet: Actif](https://img.shields.io/badge/projet-actif-brightgreen.svg)](#)

Un chronomètre de tir ("shot clock") moderne, entièrement personnalisable et conçu pour l'arbitrage de parties de billard. Cette application web est pensée pour être utilisée sur n'importe quel appareil (mobile, tablette, ordinateur) et offre une expérience immersive et fiable pour les joueurs et les arbitres.





## 📋 Table des matières
1. [Fonctionnalités Clés](#-fonctionnalités-clés)
2. [Technologies Utilisées](#-technologies-utilisées)
3. [Installation et Utilisation](#-installation-et-utilisation)
4. [Règles Officielles](#-règles-officielles)
5. [Contribuer](#-contribuer)
6. [Licence](#-licence)

---

## ✨ Fonctionnalités Clés

*   **Chronomètre de Haute Précision :** Basé sur `Date.now()` pour une fiabilité à toute épreuve, sans dérive de temps.
*   **Gestion Complète des Joueurs :**
    *   Support pour deux joueurs avec noms et couleurs personnalisables.
    *   Indicateur visuel clair du joueur actif.
*   **Système d'Extensions :** Chaque joueur dispose d'une extension de temps par partie, avec un statut visuel (disponible/utilisée).
*   **Personnalisation Poussée :** Un menu de configuration complet permet de régler :
    *   **Thèmes Visuels :** Sombre (défaut), Clair et Cyberpunk.
    *   **Temps :** Durée de base par coup et durée de l'extension.
    *   **Alertes :** Seuils d'avertissement (orange) et critique (rouge).
    *   **Audio :** Volume général et activation/désactivation séparée des sons d'alerte et des clics.
    *   **Interface :** Mode "tout tactile" (sans boutons) ou mode classique.
    *   **Automatisation :** Démarrage auto au changement de joueur ou après un reset.
*   **Alertes Audio et Visuelles :**
    *   Changement de couleur du compteur aux seuils d'alerte.
    *   Effet de "flash" sur le cadre pour attirer l'attention.
    *   Sons distincts (via Tone.js) pour l'avertissement, le décompte final, et la fin du temps.
*   **Expérience Utilisateur Soignée (QoL) :**
    *   **PWA Installable :** Peut être "installée" sur mobile ou bureau pour un accès hors-ligne (`manifest.json` + Service Worker).
    *   **Mode Plein Écran** pour une immersion totale.
    *   **Sauvegarde Automatique** des paramètres dans le `localStorage`.
    *   **Gestes Tactiles :** Fermeture du menu par balayage sur mobile.
    *   **Design Responsive** avec gestion des "Safe Areas" sur mobile.

---

## 🛠️ Technologies Utilisées

*   **HTML5**
*   **CSS3 :** Variables CSS pour les thèmes, Flexbox, Grid.
*   **JavaScript (ES6+) :** Logique applicative structurée en une seule classe `BilliardTimer`.
*   **Tone.js :** Librairie puissante pour la génération de sons fiables dans le navigateur.
*   **Service Worker :** Pour les capacités hors-ligne et la mise en cache des ressources (PWA).

---

## 🚀 Installation et Utilisation

Ce projet est une application web statique qui ne nécessite aucune installation complexe.

1.  **Accès direct :** Le plus simple est d'utiliser la version en ligne : **pooltimer.netlify.app**
2.  **Utilisation locale :** Si vous souhaitez l'exécuter localement, téléchargez ou clonez le dépôt, puis ouvrez le fichier `index.html` dans votre navigateur.

### Commandes principales :
*   **Clic simple (sur l'écran) :** Démarre / Met en pause le timer.
*   **Double clic (sur l'écran) :** Réinitialise le temps pour le joueur actuel (reset shot).
*   **Clic sur P1/P2 :** Change de joueur actif.
*   **Icône ⚙️ :** Ouvre le panneau de configuration.

---

## 룰 Règles Officielles

L'application intègre un résumé des procédures d'appel officielles de la *WORLD EIGHTBALL POOL FEDERATION*. Vous pouvez y accéder directement depuis le menu de l'application.

---

## 📧 Contact

Pour toute question, suggestion ou pour signaler un bug, vous pouvez utiliser le formulaire de contact disponible dans le menu de configuration de l'application.

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas :

1.  **Forkez** le projet.
2.  Créez votre branche de fonctionnalité (`git checkout -b feature/NouvelleFonctionnalite`).
3.  **Commitez** vos changements (`git commit -m 'Ajout de NouvelleFonctionnalite'`).
4.  **Pushez** vers la branche (`git push origin feature/NouvelleFonctionnalite`).
5.  Ouvrez une **Pull Request**.

---

## 📄 Licence

Ce projet est distribué sous la licence MIT. Voir le fichier `LICENSE` pour plus d'informations.
