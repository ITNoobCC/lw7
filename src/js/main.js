window.onload = function () {

    var listingElements = ['apple', 'orange'];
      var storeElements = [];
   
      function addToStoreElements(element) {
        var elementPosition = listingElements.indexOf(element);
        if (elementPosition > -1) {
          storeElements.push(element);
          listingElements.splice(elementPosition, 1);
        }
      }
   
      function updateUI() {
           var storeSelect = document.querySelector('.store-select');
      var listingSelect = document.querySelector('.listing-select');
          storeSelect.innerHTML = '';
          listingSelect.innerHTML = '';
      
      for (var i = 0; i < listingElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = listingElements[i];
        listingSelect.append(newOption);
      }
      
      for (var i = 0; i < storeElements.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = storeElements[i];
        storeSelect.append(newOption);
      }
      }
  
      var addButton = document.querySelector('#add-button');
    
    addButton.onclick = function () {
      var selectedOption = document.querySelector('.listing-select option:checked');
      addToStoreElements(selectedOption.innerText);
      updateUI();
      }
  };