export function slugifyFr(str, options = {}) {
  const separator = options.separator || "-";

  // Remplacements spécifiques français
  const map = {
    "à": "a", "â": "a", "ä": "a",
    "é": "e", "è": "e", "ê": "e", "ë": "e",
    "î": "i", "ï": "i",
    "ô": "o", "ö": "o",
    "ù": "u", "û": "u", "ü": "u",
    "ÿ": "y",
    "ç": "c",
    "œ": "oe", "æ": "ae"
  };

  return str
    .toLowerCase()
    .normalize("NFD") // décompose accents
    .replace(/[\u0300-\u036f]/g, "") // supprime diacritiques
    .split("")
    .map(char => map[char] || char) // applique la table FR
    .join("")
    .replace(/[^a-z0-9]+/g, separator) // remplace tout le reste par -
    .replace(new RegExp(`${separator}+`, "g"), separator) // nettoie doublons
    .replace(new RegExp(`^${separator}|${separator}$`, "g"), ""); // trim
}
