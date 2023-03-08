import { generateUniqId } from "../../utils/algoMethods.js";
import { makeEveryFirstLetterCapital } from "./../../utils/algoMethods.js";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils/regex.js";

/******************************המחלקה והמפתחות שצריכים להיות בה **********************************/
class User {
  #id;
  #name;
  #address;
  #phone;
  #email;
  #password;
  #createdAt;
  #isAdmin;
  #isDesigner;

  /**********************************קונסטרקטור- תיווך והענקת ערכים*******************************/
  constructor(user, users = []) {
    //מה לחפש מתוך האוביקט החדש user
    const { address, phone, name, password, email, isAdmin, isDesigner } = user; //פירקנו עם דיסטרקטור שיעביר את המידה למתודות ולתכונות
    
    this.#createdAt= new Date();   //מתודה קיימת שלא העברנו בדיסטרקטור
    //תכניס את הערכים האלו לאובייקט החדש כפי שמוגדר בדף זה
    this.#id = generateUniqId(users, 1_000_000, 9_999_999);
    this.#name = setName(name);
    this.#phone = this.checkPhone(phone);
    this.#email = this.checkUniqEmail(email);
    this.#password = this.checkPassword(password); //יצרתי את המתודה הזאת למטה, היא צריכה לשרת את הקונסטרקטור, נכניס לכאן שזה מה שצריך
  this.#address=this.checkAddress(address);
  this.#isAdmin= isAdmin || false;
  this.#isDesigner= isDesigner ||false;
  
  
  }

  /***********************מתודות שיעזרו לקונסטרקטור להכניס ערכים מתאימים **********************/
  //מתודה 1
  setName({ first, last }) {
    if (
      typeof first !== "string" ||
      typeof last !== "string" ||
      first.length < 2 ||
      last.length < 2
    )
      throw new Eror("Please enter a valid name");

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

  //מתודה 3
  checkUniqEmail(email, users) {
    email.trum();
    const regex = EMAIL_REGEX;
    const isExist = email.match(regex);
    if (!isExist) throw new Eror("Please enter a valid email address");
    const user = users.findIndex((users) => users.email === email);
    if (user !== -1) throw new Eror("User is already registered");
    return email;
  }

  //מתודה 4
  checkPassword(password) {
    const regex = PASSWORD_REGEX;
    const isExist = regex.test(password);
    if (!isExist)
      throw new Error(
        "password must contain at least one uppercase and one lowercase in English, 4 digits amd one of the following characters !@#$%^&*-"
      );
      return password;
  }

  //מתודה 5
checkAddress(address){
  const {city, street, houseNumber, zip} = address;
  if (
    typeof city !== "string" ||
    typeof street !== "string" ||
    typeof houseNumber !== "number" ||
    typeof zip !== "number" ||

    city.length<2 ||
    street.length<2 ||
    houseNumber.length<1 ||
    zip.length<4 ||
  )
    throw new Eror("Please enter a fuul and valid address");

    return(city, street, houseNumber, zip);
}

 ///*******************מתודות שלא נעביר בקונסטרקטור ******************************
 //מתודה 6
 changeIsDesignerStatus(user){
if (user._id !== this.id && !user.isAdmin)
throw new Eror ("User must be registered user or admin");
this.#isDesigner = !this.#isDesigner;
}


//מתודה 7  אחרי שיש כבר אובייקט חדש נרצה לעשות השמה למפתחות- לעדכן אותם
//המתודה נמצאת בתוך המחלקה ולכן יכולה לשנות את המפתחות הפרטיים ההלו
static findOneAndUpdate(user, users){
  if (typeof user !== "object")thrownew Error("Please enter a valid user name");
  if (Array.isArray(users) !== true || !users.length)
  throw new Error ("Please enter an array of users");

  const userInArray= users.find(user=>{return user._id === user._id});
  if (!userInArray) throw new Eror("This user is not in the database")

const {name, address, phone, email, isDesigner}=user;
userInArray.#name= userInArray.setName(name);
userInArray.#address= userInArray.checkAddress(address);
userInArray.#phone= userInArray.checkPhone(phone);
userInArray.#email=
email === userInArray.#email
? userInArray.#email
: userInArray.checkUniqEmail(email, users);
userInArray.#isDesigner= userInArray.isDesigner ? isDesigner :userInArray.isDesigner;

return users;
}


//מתודה 8
changePassword(){}





//*******************getters & setters ******************************

get _id(){
  return this.#id;
}

get name(){
  return this.#name;
}

get address (){
  return this.#address;
}
 

get phone(){
  return this.#phone;
}

 get email(){
  return this. #email;
 }
 
 get password (){
  return this.#password;
 }
 
 get createdAt(){
  return this.#createdAt;
 }

 get isAdmin(){
  return this. #isAdmin;
 }
 
 get isDesigner(){
  return this.#isDesigner;
 }
  
}



/***********************בדיקה על אוביקט חדש בשם test  **********************/
const test = {
  name: {
    first: "hadas",
    last: "wolf",
  },
  address: {
       city: "rehovot",
    street: "gorodeski",
    houseNumber: 5,
    zip: 1234,
  },
  phone: "050-1234567",
email: "hadas@gmail.com"
};




try {
  const user = new User(test);
  console.log(user);
} catch (error) {
  console.log(error.message);
}

export default User;
