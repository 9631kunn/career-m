exports.onRouteUpdate = ({ location }) => {
  if (location.pathname === "/") {
    forIphone()
  }
}

// UA

function forIphone() {
  const ua = navigator.userAgent
  if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0) {
    document.querySelector("#ftr").style.backgroundAttachment = "scroll"
  }
}
