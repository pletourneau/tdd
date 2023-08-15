// Business Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function wordFilter(text) {
  if (text.includes("zoinks")) {
      return text.replaceAll("zoinks", "");
  } else if (text.includes("muppeteer")) {
      return text.replaceAll("muppeteer", "");
  } else if (text.includes("biffaroni")) {
      return text.replaceAll("biffaroni", "");
  } else if (text.includes("loopdaloop")) {
      return text.replaceAll("loopdaloop", "");
  } 
  return text;
}