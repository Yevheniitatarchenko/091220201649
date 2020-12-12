/**
 * Calculates progress bar width
 * @param {number} current - current value
 * @param {number} max - max value
 * @returns {number} percentage
 */
function progressBarWidth(current, max) {
  let c = current;
  let m = max;
  if (m === 0) {
    m = 1;
  }
  if (c === 0) {
    c = 0;
  }
  // eslint-disable-next-line no-mixed-operators
  const val = c * 100 / m;
  return val;
}

export default progressBarWidth;
