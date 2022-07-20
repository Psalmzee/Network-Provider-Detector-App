const compute = function (ev) {
  ev.preventDefault();

  const form = ev.target;
  const phone = form.telephone.value.replace(/\s/g, "");
  const detector = new NetworkDetect(phone); 

  try {
    let network = detector.getNetworkName();

    if (!network) {
      return new Toast({
        message: `${phone} belongs to no +234 network, check the number and TRY AGAIN!`,
        type: "error",
      });
    }

    form.telephone.value = ""; // clear input field
    return new Toast({
      message: `${phone} belongs to the ${network} network`,
      type: `${network}`,
    });
  } catch (e) {
    return new Toast({
      message: e.message,
      type: "error",
    });
  }
};

let c = document.getElementById("copy_year");
let cd = new Date().getFullYear();
c.innerHTML = cd;


console.log(
  "%cPHONIE!!!",
  "font-weight: bold; font-size: 50px; color: green; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;"
);
console.log("Developed by https://samsonokeji-portfolio.netlify.app");
