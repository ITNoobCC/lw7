window.onload = function() {
  var listingElements = ["apple", "orange"];
  var storeElements = [];

  function addToStoreElements(element) {
    var elementPosition = listingElements.indexOf(element);
    if (elementPosition > -1) {
      storeElements.push(element);
      listingElements.splice(elementPosition, 1);
    }
  }

  function delElements(element) {
    for (var i = 0; i < listingElements.length; i++) {
      if (element === listingElements[i]) {
        listingElements.splice(i, 1);
      }
    }
    for (var i = 0; i < storeElements.length; i++) {
      if (element === storeElements[i]) {
        storeElements.splice(i, 1);
      }
    }
  }

  function clearElements() {
    listingElements.splice(0, listingElements.length);
    storeElements.splice(0, storeElements.length);
  }

  function newElements() {
    var textElemet = prompt("Текс: ");
    listingElements.push(textElemet);
  }

  function sortElements() {
    storeElements.sort();
  }

  function updateUI() {
    var storeSelect = document.querySelector(".store-select");
    var listingSelect = document.querySelector(".listing-select");
    storeSelect.innerHTML = "";
    listingSelect.innerHTML = "";

    for (var i = 0; i < listingElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = listingElements[i];
      listingSelect.append(newOption);
    }

    for (var i = 0; i < storeElements.length; i++) {
      var newOption = document.createElement("option");
      newOption.innerText = storeElements[i];
      storeSelect.append(newOption);
    }
  }

  var addButton = document.querySelector("#add-button");
  var delButton = document.querySelector("#del-button");
  var clearButton = document.querySelector("#clear-button");
  var newButton = document.querySelector("#new-button");
  var sortButton = document.querySelector("#sort-button");

  addButton.onclick = function() {
    var selectedOption = document.querySelector(
      ".listing-select option:checked"
    );
    addToStoreElements(selectedOption.innerText);
    updateUI();
  };

  delButton.onclick = function() {
    var selectedOption = document.querySelector("select option:checked");
    delElements(selectedOption.innerText);

    updateUI();
  };

  clearButton.onclick = function() {
    clearElements();
    updateUI();
  };

  newButton.onclick = function() {
    newElements();
    updateUI();
  };

  sortButton.onclick = function() {
    sortElements();
    updateUI();
  };
};
