import "../routes/links.js";
import renderSlider from "../pictures/components/renderSlider.js";

window.pictures = [
  {
    url: "https://img.freepik.com/premium-photo/piece-cake-with-pink-blue-decor-white-background_176873-11263.jpg?w=1380",
    alt: "cake photo",
    description:
      "whiped cream covered withe whaite coclate ganash drippings, 3  chocolate layers cake. may contain nuts and flour an milk",
  },

  {
    url: "https://img.freepik.com/premium-photo/purple-glitter-blueberry-cake-with-chocolate-glaze-white-surface-copy-space_107760-509.jpg?w=1380",
    alt: "cake photo",
    description:
      "whiped cream covered withe whaite coclate ganash drippings, 3  chocolate layers cake. may contain nuts and flour an milk",
  },

  {
    url: "https://img.freepik.com/premium-photo/chocolate-sponge-cake-light-background-dessert-birthday-holiday_116377-468.jpg?w=1060",
    alt: "cake photo",
    description:
      "whiped cream covered withe whaite coclate ganash drippings, 3  chocolate layers cake. may contain nuts and flour an milk",
  },

  {
    url: "https://img.freepik.com/free-photo/sponge-cake-with-strawberries-top_144627-45517.jpg?w=1380&t=st=1677664935~exp=1677665535~hmac=855917817710ff88e20c134bd28d57d5de7726caca01c75483d75bec1b1f25a0",
    alt: "cake photo",
    description:
      "whiped cream covered withe whaite coclate ganash drippings, 4 vanilla layers cake. may contain nuts and flour an milk",
  },
];

renderSlider(pictures, 0);
