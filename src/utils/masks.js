export const formatLancamento = (value) => {
  const onlyNumbers = value.replace(/\D/g, "");

  if (onlyNumbers.length <= 4) return `${onlyNumbers.slice(0, 4)}`;
  if (onlyNumbers.length <= 6)
    return `${onlyNumbers.slice(0, 4)}-${onlyNumbers.slice(4, 6)}`;
  return `${onlyNumbers.slice(0, 4)}-${onlyNumbers.slice(
    4,
    6
  )}-${onlyNumbers.slice(6, 8)}`;
};

export const formatTime = (value) => {
  value = value.replace(/\D/g, "");

  if (value.length <= 2) {
    return value;
  } else if (value.length <= 4) {
    return `${value.slice(0, 2)}:${value.slice(2)}`;
  } else {
    return `${value.slice(0, 2)}:${value.slice(2, 4)}:${value.slice(4, 6)}`;
  }
};
