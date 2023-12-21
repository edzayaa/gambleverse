const sliderHeader = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const sliderGamesComming = [{ id: 1 }, { id: 2 }];

var selectedSliderHeader = 1;
var selectedSliderComming = 0

const containerSlider = document.getElementById("container-sliderGames");
const containerSliderComming = document.getElementById('container-sliderGamesComming')

const svgNotSelect =
  '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none"><g filter="url(#filter0_b_193_73)"><path d="M4.06667 0.000291824L20 0L22 5.5L18.2444 12.9999L2.13333 13.0002L0 7.42017L4.06667 0.000291824Z" fill="#0C0C0C"/><path d="M0.549628 7.45766L4.3628 0.500286L19.6498 0.500006L21.4565 5.46859L17.9356 12.4999L2.47747 12.5002L0.549628 7.45766Z" stroke="#352062"/></g><defs><filter id="filter0_b_193_73" x="-20" y="-20" width="62" height="53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_193_73"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_193_73" result="shape"/></filter></defs></svg>';
const svgSelect =
  '<svg width="52" height="39" viewBox="0 0 52 39" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_2933_8)"><path d="M15.9152 10.0004L39.0909 10L42 18.0384L36.5374 28.9996L13.103 29L10 20.8447L15.9152 10.0004Z" fill="#352062"/><path d="M10.5492 20.8821L16.212 10.5004L38.7401 10.5L41.4569 18.0071L36.2279 28.4996L13.4478 28.5L10.5492 20.8821Z" stroke="#895FE3"/></g><path d="M16.3616 11H36.5374L39 18.0388L33.5374 28L13.7874 28L11 21L16.3616 11Z" fill="#4C3382"/><defs><filter id="filter0_d_2933_8" x="0" y="0" width="52" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset/><feGaussianBlur stdDeviation="5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.538196 0 0 0 0 0.372549 0 0 0 0 0.890196 0 0 0 0.6 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2933_8"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2933_8" result="shape"/></filter></defs></svg>';

function selectSliderHeader() {
    sliderHeader.map((r, index) => {
      const element = document.createElement("div");
      element.classList.add("margin-indicatorSliders-y");
      if (index === selectedSliderHeader) {
        element.innerHTML = svgSelect;
        element.addEventListener('click', (e) => {
            selectedSliderHeader = index
            console.log(index, 'EPA')
        })
        containerSlider.appendChild(element);
      } else {
        element.innerHTML = svgNotSelect;
        element.addEventListener('click', (e) => {
            selectedSliderHeader = index
            console.log(index, 'EPA')
            removeAllChildNodes(containerSlider)
            selectSliderHeader()
        })
        containerSlider.appendChild(element);
      }
    });
}

function selectSliderComming() {
    sliderGamesComming.map((r, index) => {
      const element = document.createElement("div");
      element.classList.add("margin-indicatorSliders-y");
      if (index === selectedSliderComming) {
        element.innerHTML = svgSelect;
        element.addEventListener('click', (e) => {
            selectedSliderComming = index
            console.log(index, 'EPA')
        })
        containerSliderComming.appendChild(element);
      } else {
        element.innerHTML = svgNotSelect;
        element.addEventListener('click', (e) => {
            selectedSliderComming = index
            console.log(index, 'EPA')
            removeAllChildNodes(containerSliderComming)
            selectSliderComming()
        })
        containerSliderComming.appendChild(element);
      }
    });
}



selectSliderHeader()
selectSliderComming()

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}