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
  const hasApostrophe = ["farfetchd", "sirfetchd"];
  const extra = ["flabebe"];
  let formatted = "";
  if (extra.includes(name)) {
    return "flabébé";
  } else if (hasApostrophe.includes(name)) {
    return name.substring(0, 8) + "'" + name.substring(8);
  } else if (name.includes("-") && !correct.includes(name)) {
    if (maleFemale.includes(name)) {
      let index = name.indexOf("-");
      if (name === "nidoran-m") formatted = name.substring(0, index) + "♂";
      else formatted = name.substring(0, index) + "♀";
    }
    if (hasHyphen.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formatted += "-" + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formatted += name[j];
        }
      }
    } else if (hasSpace.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formatted += " " + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formatted += name[j];
        }
      }
    } else if (hasDotAndSpace.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext && name != "mime-jr") {
          formatted += ". " + name[j].toUpperCase();
          capitalizeNext = false;
        } else if (capitalizeNext && name === "mime-jr") {
          formatted += " " + name[j].toUpperCase();
          capitalizeNext = false;
        } else formatted += name[j];
      }
      if (name === "mime-jr") {
        formatted += ".";
      }
    } else if (hasColon.includes(name)) {
      let capitalizeNext = false;
      for (let j = 0; j < name.length; j++) {
        if (name[j] === "-") {
          capitalizeNext = true;
        } else if (capitalizeNext) {
          formatted += ": " + name[j].toUpperCase();
          capitalizeNext = false;
        } else {
          formatted += name[j];
        }
      }
    } else if (hasNothing.includes(name)) {
      let index = name.indexOf("-");
      if (index !== -1) formatted = name.substring(0, index);
    }
    return formatted;
  }

  return name;
}

export function idFormatter(id) {
  const len = id.length;
  let formatted = id;
  for (let j = 0; j < 4 - len; j++) {
    formatted = "0" + formatted;
  }

  return formatted;
}

export function toUpperCase(name) {
  return name[0].toUpperCase() + name.slice(1);
}

export function getChain(url) {
  let chain = "";
  for (let i = 42; url[i] !== "/"; i++) chain = chain + url[i];
  return parseInt(chain);
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

export function evolutionCount(chain) {
  const specialCases = [
    "oddish",
    "poliwag",
    "slowpoke",
    "scyther",
    "eevee",
    "tyrogue",
    "wurmple",
    "ralts",
    "nincada",
    "snorunt",
    "clamperl",
    "burmy",
    "cosmog",
    "applin",
    "charcadet",
  ];
  if (!specialCases.includes(chain.species.name)) {
    if (!chain.evolves_to["0"]) return 1;
    else if (!chain.evolves_to["0"].evolves_to["0"]) return 2;
    else if (!chain.evolves_to["0"].evolves_to["0"].evolves_to["0"]) return 3;
  } else return 0;
}

export function divStyle(type) {
  if (type === 0) return "spcase";
  else if (type === 1) return "single";
  else if (type === 2) return "double";
  else if (type === 3) return "triple";
}
