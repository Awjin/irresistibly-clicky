window.onload = () => {
  for (const button of document.querySelectorAll(".toggle")) {
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseDown(e) {
    e.preventDefault();
  }

  function handleMouseUp(e) {
    e.preventDefault();
    const target = e.target;
    document.activeElement === target ? target.blur() : target.focus();
  }
};
