# Renov'Toit – site vitrine

Site vitrine de Renov'Toit, l'entreprise de couverture et zinguerie d'Angélino Mitault à Oroux (Deux-Sèvres).
HTML, CSS et JS natifs : aucune étape de build, aucune dépendance.

Production : https://renov-toit.vercel.app

## Arborescence

```
index.html                    page unique, sprite d'icônes inline, JSON-LD
assets/css/styles.css         styles, variables de couleur, mode sombre
assets/js/main.js             menu mobile, apparition au défilement, année, formulaire mailto
assets/img/logo.svg           logo horizontal couleur
assets/img/logo-mono-blanc.svg logo blanc (footer, en-tête en mode sombre)
assets/img/favicon.svg        monogramme carré
robots.txt                    autorise tout, pointe vers le sitemap
sitemap.xml                   une seule URL
```

## Lancer en local

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## TODO

- Assurance décennale : préciser l'assureur et le numéro de contrat (bandeau de réassurance).
- Email : remplacer `renov.toit07@gmail.com` par une adresse professionnelle (contact, formulaire, JSON-LD).
- Coordonnées GPS : l'annuaire n'en fournit pas pour le siège, la carte et le JSON-LD utilisent le centre de la commune d'Oroux.
- Mentions légales : ajouter le capital social.
- Zone d'intervention : faire confirmer la liste des communes.

## Versions

| Version | Date | Direction visuelle |
|---|---|---|
| v1 | 2026-10-14 | Bleu ardoise et terre cuite, hero en deux colonnes avec carte des qualifications, cartes de services |
| v2 | 2026-10-14 | Éditorial magazine sur papier crème, rouge tuile vieillie et vert mousse ; logo maison au trait avec monogramme RT ; hero typographique géant à titres serif, engagements en liste à filets ; frise de tuiles plates ; chiffres en ligne monospace ; travaux en sommaire à filets ; à propos avec lettrine et citation ; communes en tableau de distances ; angles vifs, sans ombre |
