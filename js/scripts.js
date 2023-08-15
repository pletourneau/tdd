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
  if (text.toLowerCase().includes("zoinks")) {
      return text.toLowerCase().replaceAll("zoinks", "");
  } else if (text.toLowerCase().includes("muppeteer")) {
      return text.toLowerCase().replaceAll("muppeteer", "");
  } else if (text.toLowerCase().includes("biffaroni")) {
      return text.toLowerCase().replaceAll("biffaroni", "");
  } else if (text.toLowerCase().includes("loopdaloop")) {
      return text.toLowerCase().replaceAll("loopdaloop", "");
  } 
  return text;
}