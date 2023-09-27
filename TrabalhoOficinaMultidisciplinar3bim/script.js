var navLinks = document.getElementById("navLinks");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbar").style.height = "14%";
    document.getElementById("titulo").style.fontSize = "28px";
    document.getElementById("logo").style.width = "80px";
    if (window.screen.width < 1300) {
      document.getElementById("navbar").style.height = "18%";
      document.getElementById("titulo").style.fontSize = "24px";
      document.getElementById("logo").style.width = "80px";
    }
    // if (window.screen.width > 700 && window.screen.width < 1300) {
    //   document.getElementById("titulo").style.fontSize = "16px";
    //   document.getElementById("logo").style.width = "50px";
    //   document.getElementById("navbar").style.height = "10%";
    // }
  } else {
    document.getElementById("navbar").style.height = "25%";
    document.getElementById("titulo").style.fontSize = "40px";
    document.getElementById("logo").style.width = "160px";
    if (window.screen.width < 1300) {
      document.getElementById("navbar").style.height = "25%";
      document.getElementById("titulo").style.fontSize = "28px";
      document.getElementById("logo").style.width = "120px";
    }
    // if (window.screen.width > 700 && window.screen.width < 1300) {
    //   document.getElementById("navbar").style.height = "14%";
    //   document.getElementById("titulo").style.fontSize = "24px";
    //   document.getElementById("logo").style.width = "80px";
    // }
  }

}

function showMenu() {
  navLinks.style.visibility = "visible";
}

function hideMenu() {
  navLinks.style.visibility = "hidden";
}