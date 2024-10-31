const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
	const xpos = event.clientX; // Using clientX for better positioning relative to the viewport
	const ypos = event.clientY; // Using clientY for better positioning relative to the viewport
	const span01 = document.createElement("span");
	span01.style.left = xpos + "px";
	span01.style.top = ypos + "px";
	const size = Math.random() * 100;
	span01.style.width = size + "px";
	span01.style.height = size + "px";
	body.appendChild(span01);
	setTimeout(() => {
		span01.remove();
	}, 3000);
});
