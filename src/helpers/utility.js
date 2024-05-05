export function englishToBanglaDigits(number) {
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  
    // Convert each English digit to Bengali
    return number.toString().replace(/\d/g, digit => {
      const index = englishDigits.indexOf(digit);
      return index !== -1 ? banglaDigits[index] : digit;
    });
  }
  