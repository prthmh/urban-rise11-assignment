import bestsellers from "./assets/bestsellers.jpg";
import hairandbeard from "./assets/hair&beard.jpg";
import massage from "./assets/massage.jpg";
import pedicure from "./assets/pedicure.jpg";
import haircolor from "./assets/haircolor.jpg";
import detan from "./assets/detan.jpg";
import facial from "./assets/facial.jpg";
import ayurvedic from "./assets/ayurvedic.jpg";
import carouselImg1 from "./assets/carousel-img-1.jpg";
import carouselImg2 from "./assets/carousel-img-2.jpg";
import carouselImg3 from "./assets/carousel-img-3.jpg";
import carouselImg4 from "./assets/carousel-img-4.jpg";
import pedicure1 from "./assets/pedicure-1.jpg";
import pedicure2 from "./assets/pedicure-2.jpg";
import manicure from "./assets/manicure.jpg";

const menuAry = [
  { id: 1, img: bestsellers, caption: "Bestsellers" },
  { id: 2, img: hairandbeard, caption: "Haircut & Beard Styling" },
  { id: 3, img: massage, caption: "Massage" },
  { id: 4, img: pedicure, caption: "Pedicure" },
  { id: 5, img: haircolor, caption: "Hair Color" },
  { id: 6, img: detan, caption: "Detan" },
  { id: 7, img: facial, caption: "Facial & Cleanup" },
  { id: 8, img: ayurvedic, caption: "Ayurvedic Massage" },
];

const imgCarousel = [
  { id: 1, img: carouselImg1, title: "Image 1" },
  { id: 2, img: carouselImg2, title: "Image 2" },
  { id: 3, img: carouselImg3, title: "Image 3" },
  { id: 4, img: carouselImg4, title: "Image 4" },
];

const bestsellerProducts = [
  {
    id: 1,
    title: "Grooming Essentials",
    rating: "4.88 (539.6K reviews)",
    price: "₹549",
    ogPrice: "₹559",
    time: "1 hr 5 mins",
    details: [
      "Haircut: Haircut for men",
      "Shave/ Beard grooming: Beard trimming & styling",
      "Massage: 10 min relaxing massage",
    ],
  },
  {
    id: 2,
    title: "Cut & Color",
    rating: "4.88 (539.6K reviews)",
    price: "₹509",
    ogPrice: "₹559",
    time: "60 mins",
    details: [
      "Haircut + Hair color: Haircut for men",
      "Hair color (Garnier Hair Color): Garnier Colors - Brown black (shade 3)",
    ],
  },
  {
    id: 3,
    title: "Face care & beyond",
    rating: "4.88 (539.6K reviews)",
    price: "₹849",
    ogPrice: "₹1559",
    time: "1 hr 15 mins",
    details: [
      "Detan: Face & Neck Detan Pack",
      "Haircut: Haircut for men",
      "Shave/ Beard grooming: Beard trimming & styling",
    ],
  },
];

const pedicureProducts = [
  {
    id: 1,
    title: "Deep Cleanse Pedicure",
    rating: "4.83 (30.1K reviews)",
    price: "₹749",
    time: "60 mins",
    details: [
      "Premium nail & foot care to remove dead skin, calluses & odour",
      "Includes smoothie mask, relaxing warm water soak, scrub, cream massage",
    ],
    img: pedicure1,
  },
  {
    id: 2,
    title: "Express Pedicure",
    rating: "4.82 (22.7K reviews)",
    price: "₹449",
    time: "30 mins",
    details: [
      "Nail & foot care for regular maintenance",
      "Includes warm water soak, cleansing & massage",
    ],
    img: pedicure2,
  },
  {
    id: 3,
    title: "Manicure",
    rating: "4.79 (9K reviews)",
    price: "₹449",
    time: "30 mins",
    details: [
      "Nail & foot care for regular maintenance",
      "Includes warm water soak, cleansing & massage",
    ],
    img: manicure,
  },
];

export { menuAry, imgCarousel, bestsellerProducts, pedicureProducts };
