const slider = [{ id: 1 }, { id: 2 }, { id: 3 }];
var selectedSlider = 0;

const containerSlider = document.getElementById("container-sliderHome");

const svgNotSelect =
  '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="41" viewBox="0 0 13 41" fill="none"><g filter="url(#filter0_b_512_76)"><path d="M12.9997 7.5484L13 37.1233L7.5 40.8356L0.000118256 33.8647L-0.000171661 3.95982L5.57983 0L12.9997 7.5484Z" fill="#0C0C0C"/><path d="M5.52184 0.65426L12.4997 7.753L12.5 36.8575L7.54948 40.199L0.500116 33.6468L0.499831 4.2181L5.52184 0.65426Z" stroke="#352062"/></g><defs><filter id="filter0_b_512_76" x="-20.0001" y="-20" width="53.0001" height="80.8354" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_512_76"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_512_76" result="shape"/></filter></defs></svg>';
const svgSelect =
  '<svg xmlns="http://www.w3.org/2000/svg" width="39" height="80" viewBox="0 0 39 80" fill="none"><g filter="url(#filter0_d_512_80)"><path d="M28.9996 20.9795L29 63.9975L20.9616 69.3973L10.0004 59.2577L10 15.7597L18.1553 10L28.9996 20.9795Z" fill="#352062"/><path d="M18.0974 10.653L28.4996 21.1848L28.5 63.731L21.011 68.7618L10.5004 59.0391L10.5 16.0187L18.0974 10.653Z" stroke="#895FE3"/></g><defs><filter id="filter0_d_512_80" x="0" y="0" width="39" height="79.3975" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.538196 0 0 0 0 0.372549 0 0 0 0 0.890196 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_512_80"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_512_80" result="shape"/></filter></defs></svg>';

function selectSlider() {
    slider.map((r, index) => {
      const element = document.createElement("div");
      element.classList.add("margin-indicatorSliders");
      if (index === selectedSlider) {
        element.innerHTML = svgSelect;
        element.addEventListener('click', (e) => {
            selectedSlider = index
            console.log(index, 'EPA')
        })
        containerSlider.appendChild(element);
      } else {
        element.innerHTML = svgNotSelect;
        element.addEventListener('click', (e) => {
            selectedSlider = index
            console.log(index, 'EPA')
            removeAllChildNodes(containerSlider)
            selectSlider()
        })
        containerSlider.appendChild(element);
      }
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

selectSlider()