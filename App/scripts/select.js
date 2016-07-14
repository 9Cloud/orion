// Select
// Store option in a variable
var selectOption = document.querySelector('.l-select option');
var expandSelect = selectOption.setAttribute('expand', false);
var selectButton = document.querySelector('.l-select');
    selectButton.onclick = function () {
         if (selectOption.getAttribute('expand') !== false) {
            selectOption.style.display = 'none';
             document.querySelector('.l-select-dd').style.display = 'block';
        }
        else {
            document.querySelector('.l-select-dd').style.display = 'none';
            selectOption.style.display = 'block';
         }
    }
