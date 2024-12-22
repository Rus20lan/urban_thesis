export enum ScreenBreakpoint {
  LG = 992,
}

export const questionOne = {
  question: "Какой тип кроссовок рассматриваете?",
  variants: [
    { id: 1, name: "беговые", img: "src/images/sneakers/run_sneakers.webp" },
    {
      id: 2,
      name: "баскетбольные",
      img: "src/images/sneakers/basket_sneakers.webp",
    },
    {
      id: 3,
      name: "футбольные",
      img: "src/images/sneakers/soccer_sneakers.webp",
    },
    {
      id: 4,
      name: "повседневные",
      img: "src/images/sneakers/casual_sneakers.webp",
    },
    {
      id: 5,
      name: "для фитнеса",
      img: "src/images/sneakers/fitness_sneakers.webp",
    },
    {
      id: 6,
      name: "для туризма",
      img: "src/images/sneakers/hiking_sneakers.webp",
    },
  ],
};
export const questionTwo = {
  question: "Какой размер вам подойдет?",
  variants: ["менее 36", "36-38", "39-41", "42-44", "45 и больше"],
};
