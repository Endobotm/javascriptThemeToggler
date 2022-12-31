var dark = document.querySelector("#dark");
var light = document.querySelector("#light");
var main = document.querySelector(".main1");

var themeLightDark = {
  light: {
    bg: "#e2e2e2",
    text: "#707070",
  },
  dark: {
    bg: "#222222",
    text: "#e2e2e2",
  },
};

light.addEventListener("click", () => {
  main.style.backgroundColor = `${themeLightDark.light.bg}`;
  main.style.color = `${themeLightDark.light.text}`;
});
dark.addEventListener("click", () => {
  main.style.backgroundColor = `${themeLightDark.dark.bg}`;
  main.style.color = `${themeLightDark.dark.text}`;
});
