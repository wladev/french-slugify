import { slugifyFr } from "@wladev/french-slugify";

// Transformation simple
const titre = "À l'école, c'est déjà Noël !";
const slug = slugifyFr(titre);
console.log(slug); 
// "a-l-ecole-c-est-deja-noel"

// Avec un séparateur personnalisé
const autreSlug = slugifyFr("Cœur d'artichaut", { separator: "_" });
console.log(autreSlug); 
// "coeur_d-artichaut"

// Exemple pratique : générer l’URL d’un article
const postTitle = "Mon super article !";
const url = `https://monsite.com/articles/${slugifyFr(postTitle)}`;
console.log(url);
// "https://monsite.com/articles/mon-super-article"
