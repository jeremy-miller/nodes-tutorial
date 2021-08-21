module.exports = (node, graph) => {
	const triggerIn = node.triggerIn("in");

	triggerIn.onTrigger = (props) => {
		const { ctx, size } = props;
		ctx.fillStyle = `#FFFFFF`;
		ctx.strokeStyle = "#000000";
		ctx.beginPath();
		ctx.ellipse(0, 0, size / 4, size / 4, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	};
};