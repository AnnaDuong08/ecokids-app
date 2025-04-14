export interface OnboardingData {
  id: number;
  imgSrc: number;
  title: string;
  description: string;
}

export const homeData: OnboardingData[] = [
  {
    id: 4,
    imgSrc: require("../assets/env/img1.png"),
    title: "Ô nhiễm không khí",
    description:
      "Ô nhiễm không khí là sự thay đổi lớn trong thành phần của không khí, chủ yếu do khói, bụi, hơi hoặc các khí lạ được đưa vào không khí, có sự tỏa mùi, làm giảm tầm nhìn xa, gây biến đổi khí hậu, gây bệnh cho con người",
  },
  {
    id: 1,
    imgSrc: require("../assets/env/img2.png"),
    title: "Ô nhiễm đất",
    description:
      "Tình trạng mà môi trường sống của chúng ta bị ô nhiễm và suy giảm chất lượng do sự tồn tại của các chất gây ô nhiễm",
  },
  {
    id: 2,
    imgSrc: require("../assets/env/img3.png"),
    title: "Ô nhiễm nước",
    description:
      "Bao gồm việc ô nhiễm các nguồn nước như sông, ao hồ và nguồn nước ngầm bởi các chất gây ô nhiễm như chất hóa học, chất thải công nghiệp và nông nghiệp, và vi khuẩn từ nước thải.",
  },
  {
    id: 3,
    imgSrc: require("../assets/env/img4.png"),
    title: "Ô nhiễm tiếng ồn",
    description:
      "Là sự phát ra của các âm thanh không mong muốn hoặc quá lớn từ các nguồn như giao thông, công trình xây dựng, và công nghiệp, có thể gây ra căng thẳng và ảnh hưởng đến sức khỏe tinh thần và thể chất.",
  },
];

export const quizzSlideImg = [
  {
    id: 1,
    imgSrc: require("../assets/env/quizz-img1.png"),
    level: "easy",
  },
  {
    id: 2,
    imgSrc: require("../assets/env/quizz-img2.png"),
    level: "medium",
  },
  {
    id: 3,
    imgSrc: require("../assets/env/quizz-img3.png"),
    level: "hard",
  },
];
