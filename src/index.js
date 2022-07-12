import "./styles.css";
import * as markerjs2 from "markerjs2";

function showMarkerArea(target) {
  const markerArea = new markerjs2.MarkerArea(target);
  markerArea.availableMarkerTypes = ["FrameMarker", markerjs2.ArrowMarker];
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
