window.showSampleState = true;
window.sampleState = {
  width: 1296,
  height: 1274,
  markers: [
    {
      fillColor: "#FFFFFF",
      strokeColor: "transparent",
      strokeWidth: 0,
      strokeDasharray: "",
      opacity: 1,
      left: 144.625,
      top: -14.0625,
      width: 1010.1484375,
      height: 214.15234375,
      rotationAngle: 0,
      visualTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      containerTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      typeName: "CoverMarker",
      state: "select"
    },
    {
      color: "#000000",
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: 5,
      text: "Easily open and close",
      left: 148.72265625,
      top: -0.80078125,
      width: 997.77734375,
      height: 114.12890625,
      rotationAngle: 0,
      visualTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      containerTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      typeName: "TextMarker",
      state: "select"
    },
    {
      color: "#000000",
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: 5,
      text: "the camera shutter (click me)",
      left: 150.98046875,
      top: 76.98828125,
      width: 998.96484375,
      height: 117.80078125,
      rotationAngle: 0,
      visualTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      containerTransformMatrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      },
      typeName: "TextMarker",
      state: "select"
    }
  ]
};

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
  markerArea.addEventListener("render", (event) => {
    target.src = event.dataUrl;
    fetch(target.src)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `markup_${window.filename}`;
        link.click();
      })
      .catch(console.error);
    window.showSampleState = false;
  });
  markerArea.show();

  if (window.showSampleState) {
    markerArea.restoreState(window.sampleState);
  }
}

const image = document.getElementById("targetImage");

image.onload = function () {
  showMarkerArea(image);
};

image.src = "img/sample.jpg";
window.filename = "sample.jpg";

const target = window["image-input"];

target.onchange = (evt) => {
  const [file] = target.files;
  if (file) {
    debugger;
    window.filename = file.name;
    window.showSampleState = false;
    image.src = URL.createObjectURL(file);
    showMarkerArea(image);
  }
};

target.removeAttribute("disabled");
