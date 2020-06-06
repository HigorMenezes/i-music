export function msFormatter(duration) {
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration - hours * 1000 * 60 * 60) / (1000 * 60));
  const secondes = Math.floor(
    (duration - (hours * 1000 * 60 * 60 + minutes * 1000 * 60)) / 1000,
  );

  if (hours > 0) {
    const hoursString = hours >= 10 ? `${hours}` : `0${hours}`;
    const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;
    const secondesString = secondes >= 10 ? `${secondes}` : `0${secondes}`;

    return `${hoursString}:${minutesString}:${secondesString}h`;
  }

  if (minutes > 0) {
    const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;
    const secondesString = secondes >= 10 ? `${secondes}` : `0${secondes}`;

    return `${minutesString}:${secondesString}m`;
  }

  const secondesString = secondes >= 10 ? `${secondes}` : `0${secondes}`;

  return `${secondesString}s`;
}
