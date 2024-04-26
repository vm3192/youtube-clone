export const formatDate = (publishedDate: string) => {
  const date = new Date(publishedDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};

export const formatCount = (count: number) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(0) + 'k';
  } else {
    return count.toString();
  }
};

export const formatCountWithComma = (count: string) => {
  const numberTypeCount = parseInt(count)
  return numberTypeCount.toLocaleString();
}