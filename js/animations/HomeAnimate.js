import { animationScaleElement } from "./Animations.js"

const allCirclesLinesHome = [
    "#circle-line-one",
    "#circle-line-two",
    "#circle-line-thre",
    "#circle-line-four",
    "#circle-line-five",
    "#circle-line-six"
]

const linesStoreCarts = [
    ".arrow-absoulutes-right",
    ".arrow-absoulutes-left",
]

allCirclesLinesHome.forEach((e) => animationScaleElement(e))
linesStoreCarts.forEach((e) => animationScaleElement(e))