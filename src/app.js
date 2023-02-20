/* console.log("in app"); */
import PAGES from "./models/pageModel.js";

import {
  HOME_PAGE_LINK,
  ABOUT_PAGE_LINK,
  CAKES_PAGE_LINK,
  SWEETS_PAGE_LINK,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
} from "../services/domService.js";
import { onChangePage } from "./router.js";

//*************האזנה לאירועים */
//ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onchange(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onchange(PAGES.ABOUT));
CAKES_PAGE_LINK.addEventListener("click", () => onchange(PAGES.CAKES));
SWEETS_PAGE_LINK.addEventListener("click", () => onchange(PAGES.SWEETS));
SIGNUP_PAGE_LINK.addEventListener("click", () => onchange(PAGES.SIGNUP));
LOGIN_PAGE_LINK.addEventListener("click", () => onchange(PAGES.LOGIN));
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () => onchange(PAGES.HOME));
