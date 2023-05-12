function translateToArabic() {
    // Get the HTML element to translate
    const body = document.getElementById("myBody");
  السلام عليكم
    // Set the language attribute to indicate the page is in Arabic
    body.setAttribute("lang", "ar");
  
    // Translate the text content of the HTML element
    body.textContent = "Arabic text here";
    // Repeat the above line for all elements that need to be translated
  }
  
  // Add an event listener to the button
  const translateBtn = document.getElementById("translateBtn");
  translateBtn.addEventListener("click", translateToArabic);
  