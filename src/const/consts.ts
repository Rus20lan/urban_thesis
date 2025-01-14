export enum ScreenBreakpoint {
  LG = 992,
  XL = 1024,
  TB = 768,
}

export const questionOne = {
  question: 'Какой тип кроссовок рассматриваете?',
  variants: [
    { id: 1, name: 'беговые', img: '/run_sneakers.webp' },
    {
      id: 2,
      name: 'баскетбольные',
      img: '/basket_sneakers.webp',
    },
    {
      id: 3,
      name: 'футбольные',
      img: '/soccer_sneakers.webp',
    },
    {
      id: 4,
      name: 'повседневные',
      img: '/casual_sneakers.webp',
    },
    {
      id: 5,
      name: 'для фитнеса',
      img: '/fitness_sneakers.webp',
    },
    {
      id: 6,
      name: 'для туризма',
      img: '/hiking_sneakers.webp',
    },
  ],
};
export const questionTwo = {
  question: 'Какой размер вам подойдет?',
  variants: ['менее 36', '36-38', '39-41', '42-44', '45 и больше'],
};

export const faq = [
  {
    id: 1,
    question: 'Какие кроссовки лучше выбрать для повседневной носки?',
    answer:
      'Для повседневной носки подойдут кроссовки, которые сочетают в себе комфорт и стиль. Стоит выбирать модели с хорошей амортизацией и поддержкой стопы, дышащими материалами (сетка, натуральная кожа) и универсальными цветами и моделями. ',
  },
  {
    id: 2,
    question: 'Как выбрать кроссовки для бега? ',
    answer:
      'Нужно определить, как стопа приземляется на поверхность (тип пронации). Это поможет выбрать обувь с правильной поддержкой. Также следует учитывать тип поверхности, по которой будет происходить бег: на асфальте, в зале или по пересечённой местности. Ещё один критерий выбора — достаточная амортизация, которая смягчает удары и защищает суставы.',
  },
  {
    id: 3,
    question: 'Как ухаживать за кроссовками, чтобы они служили дольше?',
    answer:
      'После каждой носки нужно удалять грязь и пыль. Для этого следует использовать мягкую щётку или влажную ткань. Сушить кроссовки нужно при комнатной температуре, используя газетные листы для поглощения влаги. Для кожаных и замшевых кроссовок подойдут специальные чистящие средства и защитные спреи.',
  },
  {
    id: 4,
    question: 'Как определить размер кроссовок?',
    answer:
      'Нужно измерить длину и ширину обеих стоп и ориентироваться на большую из них. Затем следует свериться с таблицами размеров конкретного производителя, так как у разных брендов могут быть свои особенности размерной сетки.',
  },
];

export const address = {
  mainOffice: {
    phone: '+7 800 789 89 89',
    address: 'г. Санкт-Петербург, Комсомольская, 43 к1',
  },
  salesTeam: {
    phone: '+7 800 789 89 89',
    address: 'г. Санкт-Петербург, Комсомольская, 43 к1',
  },
};

export const sizeConst = [
  { id: 'size-35', value: '35' },
  { id: 'size-36', value: '36' },
  { id: 'size-37', value: '37' },
  { id: 'size-38', value: '38' },
  { id: 'size-39', value: '39' },
  { id: 'size-40', value: '40' },
  { id: 'size-41', value: '41' },
  { id: 'size-42', value: '42' },
  { id: 'size-43', value: '43' },
];

export enum INITIAL_FILTER_DATA {
  PRICE_LOW = 1850,
  PRICE_HIGH = 25768,
}
