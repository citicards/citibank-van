export default function conformListObjectToArray(listObject) {
  const list = [];

  Object.keys(listObject).forEach(key => {
    const lastLetterInKey = key.substring(key.length - 1, key.length);
    if(!isNaN(lastLetterInKey)) {
      const itemNumber = Number(lastLetterInKey);
      if (!list[itemNumber - 1]) {
        list[itemNumber - 1] = {};
      }
      list[itemNumber - 1][key.substring(0, key.length - 1)] = listObject[key];
    }
  });

  return list;
}
