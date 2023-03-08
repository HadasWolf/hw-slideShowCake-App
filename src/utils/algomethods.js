const term = "add your picture here"; //הוא יעבור דרך הפונקציה לכן נכתוב אותו למעלה

// ************************************מתודה makeEveryFirstLetterCapital************************************
export const makeEveryFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  const splitText = term.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
  }

  return splitText.join(" ");
};



// *****************************************מתודה randomNumBetween**********************************************
export const randomNumBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const solution = makeEveryFirstLatterCapital(term); //הפעלה
console.log(solution); //נבדוק שהפונקציה עובדת



// **********************************************מתודה generateId**********************************************
export const generateUniqId = (array, min, max) => {
  if (array.length >= max - min)
    throw new Error("you reached max items in the array!");
  if (min >= max) throw new Error("min number must be lower then max number");

  const randomNumber = randomNumBetween(min, max);
  const item = array.findIndex((item) => item._id === randomNumber);
  if (item === -1)
    return randomNumber.toString() + new Date().toLocaleTimeString();
  this.generateId(array);
};
