import React, { useRef, useEffect } from 'react';
import './App.css';
import { selct } from 'd3';

const data = [25, 30, 45, 60, 20];

function App() {
	const svgRef = useRef();

	useEffect(() => {
    const svg = select(svgRef.current);

  }, []);

	return <svg ref={svgRef}></svg>;
}

export default App;
