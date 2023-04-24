export const convertToMillion = (value) => {
  return (value / 1000000).toFixed(1);
};

export const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
