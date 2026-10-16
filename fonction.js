function isLeapYear(year) {
  if (year % 400 === 0) {
    return true; // 1. divisible by 400 => leap
  }
  if (year % 100 === 0) {
    return false; // 2. divisible by 100 but not 400 => NOT leap
  }
  if (year % 4 === 0) {
    return true; // 3. divisible by 4 but not 100 => leap
  }
  return false;
}