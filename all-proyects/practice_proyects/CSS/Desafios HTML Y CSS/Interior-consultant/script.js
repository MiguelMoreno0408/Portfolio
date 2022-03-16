var menu = document.getElementById('menuu');
var closeIcon = document.getElementById("toggler");

    menu.addEventListener('click', handleMenuClick);

    function handleMenuClick(event) {
      if (event.target instanceof HTMLAnchorElement) {
        closeIcon.checked = false;
      }
    }