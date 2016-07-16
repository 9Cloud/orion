    // Globals
    var selectOption = document.querySelector('.l-select option');
    var selectContainer = document.querySelector('.l-select');
    var selectDropdown = document.querySelector('.l-select-dd');

    // Hide the first select option
    selectOption.style.display = 'none';

    selectContainer.onclick = function (e) {
        var display = window.getComputedStyle(document.querySelector('.l-select-dd')).display;

        if (display == 'none') {
            // Display the drop down menu
            selectDropdown.style.display = 'block';
        }
        else {
            // Hide drop down menu
            selectDropdown.style.display = 'none';
        }
    }