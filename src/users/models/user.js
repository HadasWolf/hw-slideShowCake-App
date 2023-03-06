import { generateUniqId } from "../../utils/algoMethods.js";
import { makeEveryFirstLetterCapital } from "./../../utils/algoMethods.js";

/******************************המחלקה והמפתחות שצריכים להיות בה **********************************/
class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin = false;
  #isBusiness = false;

  /**********************************קונסטרקטור- תיווך והענקת ערכים*******************************/
  constructor(user, users = []) {
    //מה לחפש מתוך האוביקט החדש user
    const { address, phone, name, password } = user;   //מכאן נקבל את המידע

    //מה לחפש מתוך המפתחות כתובת של האובייקט החדש
    const { state, country, city, street, houseNumber, zip } = address;

    //תכניס את הערכים האלו לאובייקט החדש כפי שמוגדר בדף זה
    this.#address = { state, country, city, street, houseNumber, zip };
    this.#phone = this.checkPhone(phone);
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#name = this.setName(name);
    this.#password= this.checkPassword //יצרתי את המתודה הזאת למטה, היא צריכה לשרת את הקונסטרקטור, נכניס לכאן שזה מה שצריך
  }

  /***********************מתודות שיעזרו לקונסטרקטור להכניס ערכים מתאימים **********************/
  //מתודה 1
  setName({ first, last }) {
    return {
      first: makeEveryFirstLetterCapital(first),
      last: makeEveryFirstLetterCapital(last),
    };
  }

  //מתודה 2
  checkPhone(phone) {
      const regex = /^0[0-9]{1,2}(-?|\s?)[0-9]{3}(-?|\s?)[0-9]{4}/g;
      const isExist = phone.match(regex);
      if (!isExist) throw new Error("Please enter a valid phone number!");
      return phone;
    }
}

//מתודה 2
 checkPassword(password) {
    const regex=
    //g;
    const isExist= regex.test(email)
    if (isExist) throw new Error( "password must contain..."
    );

}



/***********************בדיקה על אוביקט חדש בשם test  **********************/
const test = {
  address: {
    state: "usa",
    country: "new-york",
    city: "new-york",
    street: "brodway",
    houseNumber: 5,
    zip: 123456,
  },
  phone: "050-0000000",
  name: {
    first: "david",
    last: "yakin",
  },
};

try {
  const user = new User(test);
  console.log(user);
} catch (error) {
  console.log(error.message);
}

export default User;
