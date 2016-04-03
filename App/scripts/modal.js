function modal(el_id){
    // this is just a sample
    var overlay = document.createElement("div");
    overlay.className = 'modal_overlay';
    document.body.appendChild(overlay);

    var dialog = document.getElementById('my_modal');
    dialog.className = 'modal active';

    var close_btn = document.getElementById('modal_close_btn');

    close_btn.onclick = function(){
        dialog.className = 'modal hidden';
        overlay.remove();
    };
}


