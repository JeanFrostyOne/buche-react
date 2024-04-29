export const baseUrl = "https://661fbe3e16358961cd955774.mockapi.io";

export const tags = [
  { name: "сезонное", id: 1 },
  { name: "классика", id: 2 },
  { name: "vegan", id: 3 },
  { name: "популярные", id: 4 },
  { name: "акция", id: 5 },
  { name: "новинка", id: 6 },
];

export const getTagById = (id) => {
  return tags.find((element) => {
    return element.id === id;
  });
};

export const categories = [
  { name: "завтраки", id: 1 },
  { name: "напитки", id: 2 },
  { name: "торты", id: 3 },
  { name: "эклеры", id: 4 },
  { name: "пирожные", id: 5 },
  { name: "кексы и печенье", id: 6 },
  { name: "слойка", id: 7 },
  { name: "хлеб", id: 8 },
  { name: "закуски и сендвичи", id: 9 },
  { name: "тосты и бриошь", id: 10 },
];
