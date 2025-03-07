export default function shortenNumber(number) {
    if (typeof number !== "number" || isNaN(number)) {
      return "Invalid input"; // Handle invalid input
    }
  
    if (number < 1000) {
      return number.toString(); // No shortening needed for numbers less than 1000
    }
  
    const abbreviations = [
      { value: 1e9, suffix: "B" }, // Billion
      { value: 1e6, suffix: "M" }, // Million
      { value: 1e3, suffix: "K" }, // Thousand
    ];
  
    for (const { value, suffix } of abbreviations) {
      if (number >= value) {
        const shortened = (number / value).toFixed(1); // Round to 1 decimal place
        return shortened.endsWith(".0") 
          ? shortened.slice(0, -2) + suffix // Remove ".0" if present
          : shortened + suffix;
      }
    }
  
    return number.toString(); // Fallback for numbers less than 1000
  }