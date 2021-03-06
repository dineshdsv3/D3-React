import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { select, line, curveCardinal } from 'd3';

function App() {
	const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
	const svgRef = useRef();

	useEffect(() => {
		const svg = select(svgRef.current);
		
		// Curved Line Chart
		const myLine = line()
			.x((value, index) => index * 50)
			.y((value) => 150 - value)
			.curve(curveCardinal);

		// Circles

		// svg.selectAll('circle')
		// 	.data(data)
		// 	.join('circle')
		// 	// .join(
		// 	// 	(enter) => enter.append('circle').attr('class', 'new'),
		// 	// 	(update) =>
		// 	// 		update
		// 	// 			.attr('class', 'updated')
		// 	// )
		// 	.attr('r', (value) => value)
		// 	.attr('cx', (value) => value * 2)
		// 	.attr('cy', (value) => value * 2)
		// 	.attr('stroke', 'red')
		// 	.attr('fill', 'blue');

		// Curved Line chart

		svg.selectAll('path')
			.data([data])
			.join('path')
			.attr('d', (value) => myLine(value))
			.attr('fill', 'none')
			.attr('stroke', 'blue');
	}, [data]);

	return (
		<React.Fragment>
			<svg ref={svgRef}></svg>
			<br />
			<button onClick={() => setData(data.map((value) => value + 5))}>Update Data</button>
			<button onClick={() => setData(data.filter((value) => value < 35))}>Filter Data</button>
		</React.Fragment>
	);
}

export default App;
