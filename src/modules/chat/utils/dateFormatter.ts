function DateFormatter(timestamp: number) {
  const hours = new Date(timestamp).getHours();
  const minutes = new Date(timestamp).getMinutes();

  const time = `${hours}:${minutes}`;
  return time;
}

export { DateFormatter };
