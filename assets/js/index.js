function changeImage(event) {
    const selectedOption = event.target.value;
    const selectedImage = document.getElementById("selected-image");
    const selectedOptionText = document.getElementById("selected-option");
  
    selectedImage.src = selectedOption;
    selectedOptionText.innerText =
      event.target.options[event.target.selectedIndex].text;
  }