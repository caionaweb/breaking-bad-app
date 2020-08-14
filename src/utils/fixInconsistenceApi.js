const DEFAULT_CATEGORY = "Breaking Bad";

const namesMap = {
  "Krazy-8": "Domingo Molina",
  "Hank Schrader": "Henry Schrader",
  "Ken Winns": "Ken Wins",
  "Elliott Schwarts": "Elliot Schwartz",
  "Eliott Schwartz": "Elliot Schwartz",
  "Gretchen Swartz": "Gretchen Schwartz",
  Badger: "Brandon Mayhew",
  "Ted Beneke": "Theodore Beneke",
  Combo: "Christian Ortgea",
  "Ken Winns": "Ken Wins",
  "Mike Erhmantraut": "Mike Ehrmantraut",
  "Mike Ehrmantraut": "Mike Ehrmantraut",
  "The cousins": "Marco & Leonel Salamanca",
  "Steve Gomez": "Steven Gomez",
  "Ken Wins": "Ken",
};

const checkCategoryRelated = (category, expected = DEFAULT_CATEGORY) => {
  return category.includes(expected);
};

const decodeUri = (name) => decodeURIComponent(name).replace(/\+/g, " ");

const getConsistenceName = (name = "") => {
  const decodedName = decodeUri(name);
  return namesMap[decodedName] || decodedName;
};

export { checkCategoryRelated, getConsistenceName };
