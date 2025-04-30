import { IHomeTwoSliderData } from "@/interFace/interFace";
import bannerImgOne from '../../../public/assets/images/banner/banner-2-img-1.jpeg';
import bannerImgTwo from '../../../public/assets/images/banner/banner-2-img-2.jpeg';
import bannerImgThree from '../../../public/assets/images/banner/banner-2-img-3.jpeg';

export const sliderData: IHomeTwoSliderData[] = [
    {
      id: 1,
      bgImg: bannerImgOne,
      tagOne: "Spiritual Journeys",
      tagTwo: "Through Nepal's",
      tagThree: "Sacred Landscapes",
      description: "Experience the divine at Muktinath, Lumbini, and beyond — where every step connects you with the spiritual soul of the Himalayas."
    },
    {
      id: 2,
      bgImg: bannerImgTwo,
      tagOne: "Aerial Views of",
      tagTwo: "The Majestic",
      tagThree: "Himalayas",
      description: "Discover the grandeur of Nepal from above with our exclusive helicopter tours – breathtaking, serene, unforgettable."
    },
    {
      id: 3,
      bgImg: bannerImgThree,
      tagOne: "Unforgettable Tours",
      tagTwo: "To Nepal &",
      tagThree: "Kailash Mansarovar",
      description: "Explore the culture, nature, and sacred wonders of Nepal and Kailash with expert guidance and personalized service."
    }
  ];
  