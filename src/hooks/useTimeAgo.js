export const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnits] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnits || unit === "second") {
      const value = Math.round(elapsed / secondsInUnits);
      return { value: value, unit };
    }
  }
};

const useTimeAgo = (timestamp) => {
  const { value, unit } = getDateDiffs(timestamp);
  const relativeTimeFormat = new Intl.RelativeTimeFormat("en", {
    style: "short",
  });
  return relativeTimeFormat.format(value, unit);
};
export default useTimeAgo;
