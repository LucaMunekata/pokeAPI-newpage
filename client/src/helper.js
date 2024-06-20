export function nameFormatter(name) {
  const maleFemale = ["nidoran-f", "nidoran-m"];
  const hasHyphen = [
    "ho-oh",
    "porygon-z",
    "wo-chien",
    "chien-pao",
    "ting-lu",
    "chi-yu",
  ];
  const hasSpace = [
    "tapu-koko",
    "tapu-lele",
    "tapu-bulu",
    "tapu-fini",
    "great-tusk",
    "scream-tail",
    "brute-bonnet",
    "flutter-mane",
    "slither-wing",
    "sandy-shocks",
    "iron-treads",
    "iron-bundle",
    "iron-hands",
    "iron-jugulis",
    "iron-moth",
    "iron-thorns",
    "roaring-moon",
    "iron-valiant",
    "walking-wake",
    "iron-leaves",
    "gouging-fire",
    "raging-bolt",
    "iron-boulder",
    "iron-crown",
  ];
  const hasDotAndSpace = ["mr-mime", "mime-jr", "mr-rime"];
  const hasColon = ["type-null"];
  const hasNothing = [
    "deoxys-normal",
    "wormadam-plant",
    "giratina-altered",
    "shaymin-land",
    "basculin-red-striped",
    "darmanitan-standard",
    "tornadus-incarnate",
    "thundurus-incarnate",
    "landorus-incarnate",
    "keldeo-ordinary",
    "meloetta-aria",
    "meowstic-male",
    "aegislash-shield",
    "pumpkaboo-average",
    "gourgeist-average",
    "zygarde-50",
    "oricorio-baile",
    "lycanroc-midday",
    "wishiwashi-solo",
    "minior-red-meteor",
    "mimikyu-disguised",
    "toxtricity-amped",
    "eiscue-ice",
    "indeedee-male",
    "morpeko-full-belly",
    "urshifu-single-strike",
    "basculegion-male",
    "enamorus-incarnate",
  ];
  const correct = ["jangmo-o", "hakamo-o", "kommo-o"];
  let formated = "";
  if (name.includes("-") && !correct.includes(name)) {
    if (maleFemale.includes(name)) {
      let index = name.indexOf("-");
      if (name === "nidoran-m") formated = name.substring(0, index) + "♂";
      else formated = name.substring(0, index) + "♀";
    }
    if (hasHyphen.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formated += "-" + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formated += name[j];
        }
      }
    } else if (hasSpace.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formated += " " + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formated += name[j];
        }
      }
    } else if (hasDotAndSpace.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext && name != "mime-jr") {
          formated += ". " + name[j].toUpperCase();
          capitalizeNext = false;
        } else if (capitalizeNext && name === "mime-jr") {
          formated += " " + name[j].toUpperCase();
          capitalizeNext = false;
        } else formated += name[j];
      }
      if (name === "mime-jr") {
        formated += ".";
      }
    } else if (hasColon.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formated += ": " + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formated += name[j];
        }
      }
    } else if (hasNothing.includes(name)) {
      let index = name.indexOf("-");
      if (index !== -1) formated = name.substring(0, index);
    }
    return formated;
  }
  return name;
}

export function getRegion(num) {
  let region = "";
  if (num < 152) region = "Kanto";
  if (num > 151 && num < 252) region = "Johto";
  if (num > 251 && num < 387) region = "Hoenn";
  if (num > 386 && num < 494) region = "Sinnoh";
  if (num > 493 && num < 650) region = "Unova";
  if (num > 649 && num < 722) region = "Kalos";
  if (num > 721 && num < 810) region = "Alola";
  if (num > 809 && num < 899) region = "Galar";
  if (num > 898 && num < 906) region = "Hisui";
  if (num > 905 && num < 1026) region = "Paldea";

  return region;
}
