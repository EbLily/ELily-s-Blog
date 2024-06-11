const togglebutton = document.getElementById(`taggle-mode`)
togglebutton.addEventListener('click', function(event) {
    const toggleModeButton = event.target.getAttribute('class');
    if (toggleModeButton) {
       event.target.removeAttribute(`class`)
    } else{
        event.target.setAttribute(`class`,`dark-mode`)
    }
});