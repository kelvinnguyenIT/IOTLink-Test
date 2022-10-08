import SideBar from "./SideBar";

function App() {
  const handleTooltipBox = (event) => {
    const tooltipBox         = document.getElementById("tooltip-box");
    const sidebar            = document.getElementById("sidebar");
    const btnHideSidebar     = document.getElementById("btn__hide-sidebar");

    const sidebarWidth       = sidebar.offsetWidth;

    const positionMouseX     = event.clientX;
    const positionMouseY     = event.clientY;
    const areaHideTooltipBox = positionMouseX - sidebarWidth;

    const tooltipBoxWidth    = tooltipBox.offsetWidth;
    const tooltipBoxHeight   = tooltipBox.offsetHeight;

    const appWidth           = document.body.clientWidth;
    const appHeight          = document.body.clientHeight;
    
    if (areaHideTooltipBox <= 0) {
      tooltipBox.style.display = "none";
    } 
    else {
      tooltipBox.style.left = positionMouseX + tooltipBoxWidth + 30 < appWidth
                            ? positionMouseX + 20 + "px"
                            : appWidth - tooltipBoxWidth - 5 + "px";

      tooltipBox.style.top  = positionMouseY + tooltipBoxHeight + 30 < appHeight
                            ? positionMouseY + 20 + "px"
                            : appHeight - tooltipBoxHeight - 5 + "px";

      tooltipBox.style.display = "block";
    }

    if (btnHideSidebar.matches(":hover")) {
      tooltipBox.style.display = "none";
    }
  };

  return (
    <div
      id="app"
      className="app w-full h-screen bg-blue-400 flex overflow-y-hidden"
      onMouseMove={handleTooltipBox}
    >
      <SideBar />
      <div id="tooltip-box" className="tooltip-box h-40 w-52 bg-white absolute none"></div>
    </div>
  );
}

export default App;
