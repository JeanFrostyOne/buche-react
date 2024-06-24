export const baseUrl = "https://661fbe3e16358961cd955774.mockapi.io";

export const tags = [
  { name: "сезонное", id: 1 },
  { name: "классика", id: 2 },
  { name: "vegan", id: 3 },
  { name: "популярные", id: 4 },
  { name: "акция", id: 5 },
  { name: "новинка", id: 6 },
];

export const sorting = [
  { name: "по умолчанию ↑↓", id: 1, sortBy: "", order: "" },
  {
    name: "по цене: от меньшей к большей ↑↓",
    id: 2,
    sortBy: "price",
    order: "asc",
  },
  {
    name: "по цене: от большей к меньшей ↑↓",
    id: 3,
    sortBy: "price",
    order: "desc",
  },
  { name: "по алфавиту: а-я ↑↓", id: 4, sortBy: "name", order: "asc" },
  { name: "по алфавиту я-а ↑↓", id: 5, sortBy: "name", order: "desc" },
];

export const getTagById = (id) => {
  return tags.find((element) => {
    return element.id === id;
  });
};

export function calculateTotalSumOfProducts(state) {
  state.totalPrice = state.items.reduce((sum, elem) => {
    return sum + elem.count * elem.price;
  }, 0);
}

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
