import { useState, useEffect } from "react";
import React from "react";
import Card from "./../Card/Card";
import './style.css';


const MainPage = () => {
	var [data, setData] = useState(null);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchData = () => {
			fetch('https://breakingbadapi.com/api/characters')
			.then(res => res.json())
			.then(response => {setData(response)});
		}
		fetchData();
	}, []);
	
	const filter = (searchBy) => {
		setSearch(searchBy)
	};
	
	return (
		<div className="container">
			<input 
				placeholder="Search..." 
				type="text" 
				className="form-control"
				onChange={ (e) => filter(e.target.value) }	
				/>

				<div className="row">
					{ data && data.map((item, index) => {
						if(item.name.toLowerCase().includes(search.toLowerCase())){
							return(
								<div className="col-xs-12 col-md-4" key={index}>
									<Card personaje={item} ></Card>
								</div>
							)
						}
					})}
				</div>
		</div>
	);
};

export default MainPage