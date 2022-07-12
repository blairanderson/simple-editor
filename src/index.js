import "./styles.css";
import * as markerjs2 from "markerjs2";

function showMarkerArea(target) {
  const markerArea = new markerjs2.MarkerArea(target);
  markerArea.availableMarkerTypes = markerArea.ALL_MARKER_TYPES;
  markerArea.settings.defaultStrokeWidths = [1, 3, 5, 10, 15];
  markerArea.settings.defaultStrokeWidth = 5;
  markerArea.settings.defaultStrokeDasharrays = ["", "3", "6 3", "12 3"];
  markerArea.settings.defaultColor = "#000000";
  markerArea.settings.defaultColorSet = [
    "#EF4444", // red
    "#10B981", // green
    "#2563EB", // blue
    "#FFFF00", // yellow
    "#7C3AED", // purple
    "#F472B6", // pink
    "#000000", // black
    "#FFFFFF" //white
  ];
  markerArea.settings.defaultColorsFollowCurrentColors = true;
  markerArea.settings.defaultColorsFollowCurrentColors = true;
  markerArea.addEventListener(
    "render",
    (event) => (target.src = event.dataUrl)
  );
  markerArea.show();
}

const sampleImage = document.getElementById("sampleImage");
sampleImage.addEventListener("click", () => {
  showMarkerArea(sampleImage);
});
