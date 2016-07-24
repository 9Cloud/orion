function modal(el_id){
    // this is just a sample
    var overlay = document.createElement("div");
    overlay.className = 'l-modal-overlay';
    document.body.appendChild(overlay);

    var dialog = document.getElementById('my_modal');
    dialog.className = 'l-modal active';

    var closeBtn = document.getElementById('l-modal-close-btn');

    closeBtn.onclick = function(){
        dialog.className = 'l-modal l-hidden';
        overlay.remove();
    };
}


