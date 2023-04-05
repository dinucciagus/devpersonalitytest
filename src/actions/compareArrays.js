export function compareArrays(arr) {
  const devArrays = {
    "Back-end Developer": [3, 2, 1, 1, 1, 2, 3, 3, 2, 3],
    "Full-Stack Developer": [1, 2, 3, 1, 1, 3, 1, 3, 1, 3],
    "UX/UI designer": [2, 3, 2, 3, 2, 1, 2, 2, 3, 2],
    "Project Manager": [1, 2, 3, 2, 3, 3, 1, 3, 2, 1],
    "Front-end Developer": [2, 3, 3, 1, 2, 1, 1, 3, 3, 2],
  };

  let minDiff = Infinity;
  let closestArray = "";

  for (const [dev, values] of Object.entries(devArrays)) {
    const diff = arr.reduce(
      (acc, val, idx) => acc + Math.abs(val - values[idx]),
      0
    );

    if (diff < minDiff) {
      minDiff = diff;
      closestArray = dev;
    }
  }

  return closestArray;
}
