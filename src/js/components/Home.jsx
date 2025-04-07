import React, { useEffect, useState } from "react";
import { CardTimer } from "./CardTimer.jsx";
import { Card } from "./Card.jsx";


//create your first component
const Home = () => {
	const digito=0;
	const [counter, setCounter]=useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prev => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className="container myContainer d-flex justify-content-around">
				<CardTimer />
				<Card key="1" digito={Math.floor(counter / 100000) % 10}/>
				<Card key="2" digito={Math.floor(counter / 10000) % 10}/>
				<Card key="3" digito={Math.floor(counter / 1000) % 10}/>
				<Card key="4" digito={Math.floor(counter / 100) % 10}/>
				<Card key="5" digito={Math.floor(counter / 10) % 10}/>
				<Card key="6" digito={counter % 10}/>
			</div>
		</>
	);
};

export default Home;