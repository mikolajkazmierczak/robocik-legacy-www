'use strict';

function OpenMenu() {
  menu.classList.add(menu_opened_class);
  menuImgOpen.classList.remove(menu_button_active_class);
  menuImgClose.classList.add(menu_button_active_class);
  is_menu_opened = menu.classList.contains(menu_opened_class);
  CheckLogo();
}

function CloseMenu() {
  menu.classList.remove(menu_opened_class);
  menuImgOpen.classList.add(menu_button_active_class);
  menuImgClose.classList.remove(menu_button_active_class);
  is_menu_opened = menu.classList.contains(menu_opened_class);
  CheckLogo();
}

menuButton.onclick = function () {
  is_menu_opened = menu.classList.contains(menu_opened_class);

  if (is_menu_opened) {
    CloseMenu();
  } else {
    OpenMenu();
  }
};
//# sourceMappingURL=menu.js.map