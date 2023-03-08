import { generateUniqId } from "../../utils/algoMethods.js";


//בניית מחלקה עבור אובייקטים ממשפחת תמונות
class Pictures{
//----תכונות----    
    #id;
    url;
    alt;
    description;
    #price;
    #createdAt;
    likes=[];
    #user_id;

//----constructor----
constructor(picture, pictures=[]){
const {url, alt, description, price, user_id}= picture   //דיסטרקטור לתכונות שאקבל מהמשתמש
if (!url || !alt || !description || !price || !user_id) throw new Eror ("Bad Request");  //שגיאה אם לא אקבל מה שצריך

this.#id= generateUniqId(pictures, 1_000_000,9_999_999);
this.url= url;
this.alt= alt;
this.description= description;
this.#price= price;
this.#user_id=user_id;
this.#createdAt= new Date();
}

//----methods------


//----getter&setters----
get _id(){
return this.#id;
}

get price(){
return this.#price;
}

get createdAt(){
return this.#createdAt
}

get user_id(){
return this.#user_id;
}
}

//----try&catch-----

export default Pictures;