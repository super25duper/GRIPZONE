function openm() {
  const menu = document.getElementById("side-menu");
  const os = document.getElementById("os");
const cm = document.getElementById("cm");
  if (menu.style.right === "-340px") {
    menu.style.right = "0px";
    os.style.opacity = "1";
    cm.style.zIndex = "5";
  } else {
    menu.style.right = "-340px";
    os.style.opacity = "0";
    cm.style.zIndex = "0";
  }
}
