function modal(el_id){
    // this is just a sample
    var overlay = document.createElement("div");
    overlay.className = 'l-modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.getElementById('JS_Modal');
    dialog.className = 'l-modal active';

    var closeBtn = document.querySelectorAll('.l-close-modal');

    for (var i = 0; i < closeBtn.length; i++) {
        closeBtn[i].onclick = function() {
            dialog.className = 'l-modal l-hidden';
            overlay.remove();
        };
    }
}


