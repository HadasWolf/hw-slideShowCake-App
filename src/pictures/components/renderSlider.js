import { SLIDER_IMAGE, SLIDER_DESCRIPTION } from "../../services/domService.js";
import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN } from "../../services/domService.js";
import onChangeSliderPic from "../helpers/onChangeSliderPic.js";

let counter = 0;

const renderSlider = (pictures, num = 0) => {
  if (!pictures.length) return undefined;
  SLIDER_IMAGE.src = pictures[num].url;
  SLIDER_IMAGE.alt = pictures[num].alt;
  SLIDER_DESCRIPTION.innerHTMl = pictures[num].description;
};

SLIDER_NEXT_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "next"))
);

SLIDER_PREV_BTN.addEventListener(
  "click",
  () => (counter = onChangeSliderPic(pictures, counter, "prev"))
);

export default renderSlider;
