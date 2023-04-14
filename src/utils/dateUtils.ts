export const formatDate = (at: number) => {
  const date = new Date(at);
  const day = date.getDay().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formattedDate = ` ${day} /\ ${month} /\ ${year}`;
  return formattedDate;
};
