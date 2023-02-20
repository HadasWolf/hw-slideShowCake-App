import PAGES from "../models/pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  CAKES_PAGE,
  SWEETS_PAGE,
  SIGNUP_PAGE,
  LOGIN_PAGE,
  EROR404_PAGE,
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CAKES_PAGE.className = "d-none";
  SWEETS_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  EROR404_PAGE.className = "d-none";

  if (page === PAGES.HOME) return (HOME_PAGE.classNamee = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CAKES) return (CAKES_PAGE.className = "d-block");
  if (page === PAGES.SWEETS) return (SWEETS_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");

  EROR404_PAGE.className = "block";
};
