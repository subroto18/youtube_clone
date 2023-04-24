export const MESSAGE_LIMIT = 20;
export const MESSAGE_DELETE_LIMIT = 1;
export const STRING_LENGTH = 20;
export const CHAR_SET = "PICKCHARSFROMTHISSET";
export const WIDTH_BREAK_POINT_DRAWR_MENU = 1280;

export const slug = (query) => {
  return query
    .toLowerCase()
    .replace(/ /g, "+")
    .replace(/[^\w-]+/g, "+");
};
