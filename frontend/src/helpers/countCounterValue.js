export const countCounterValue = (tenderStartDate) => {
  const gapMinutes = (Date.now() - tenderStartDate) / 1000 / 60
  const offset = ((gapMinutes / 2) % 1) * 120
  const remainingSeconds = 120 - offset

  const gapRoundes = gapMinutes / 2

  return { remainingSeconds, gapRoundes }
}
