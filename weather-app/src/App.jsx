import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import coldBg from './assets/cold.png'
import hotBg from './assets/hot.jpg'

function App() {
	// State variables for storing weather data
	const [data, setData] = useState({})
	const [location, setLocation] = useState('')
	const [icon, setIcon] = useState('')
	const [temp, setTemp] = useState(0)
	const [feels_like, setFeelsLike] = useState(0)
	const [windspeed, setWindSpeed] = useState(0)
	const [humidity, setHumidity] = useState(0)
	const [weather, setWeather] = useState('')
	const [bg, setBg] = useState (coldBg)

	// State variables for 5-day forecast data
	const [time1, setTime1] = useState('')
	const [icon1, setIcon1] = useState('')
	const [temp1, setTemp1] = useState(0)
	const [desc1, setDesc1] = useState('')

	const [time2, setTime2] = useState('')
	const [icon2, setIcon2] = useState('')
	const [temp2, setTemp2] = useState(0)
	const [desc2, setDesc2] = useState('')

	const [time3, setTime3] = useState('')
	const [icon3, setIcon3] = useState('')
	const [temp3, setTemp3] = useState(0)
	const [desc3, setDesc3] = useState('')

	const [time4, setTime4] = useState('')
	const [icon4, setIcon4] = useState('')
	const [temp4, setTemp4] = useState(0)
	const [desc4, setDesc4] = useState('')

	const [time5, setTime5] = useState('')
	const [icon5, setIcon5] = useState('')
	const [temp5, setTemp5] = useState(0)
	const [desc5, setDesc5] = useState('')	

	// URLs for fetching weather data and forecast
	const newApiKey = 'eb3e2b69d5805533c2d2c13bd96544f4';

	// URLs for fetching weather data and forecast
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${newApiKey}`
	const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${newApiKey}`

	

	// Function to search for location on Enter key press
	const searchLocation = (event) => {
		if(event.key === 'Enter'){
			axios.get(url2).then((response) => {
				// Set state variables with data from the API response
				setData(response.data)
				setIcon('http://openweathermap.org/img/wn/'+response.data.list[0].weather[0].icon +'@2x.png')				
				setTemp(response.data.list[0].main.temp.toFixed())
				setFeelsLike(response.data.list[0].main.feels_like.toFixed())
				setWindSpeed(response.data.list[0].wind.speed.toFixed())
				setHumidity(response.data.list[0].main.humidity)
				setWeather(response.data.list[0].weather[0].main)

				// Extract data for the 5-day forecast
				const a = new Date(response.data.list[1].dt_txt).getHours();
				const b = new Date(response.data.list[2].dt_txt).getHours();
				const c = new Date(response.data.list[3].dt_txt).getHours();
				const d = new Date(response.data.list[4].dt_txt).getHours();
				const e = new Date(response.data.list[5].dt_txt).getHours();

				setTime1(a + ':00')
				setIcon1('http://openweathermap.org/img/wn/'+response.data.list[1].weather[0].icon +'@2x.png')
				setTemp1(response.data.list[1].main.temp.toFixed())
				setDesc1(response.data.list[1].weather[0].main)

				setTime2(b + ':00')
				setIcon2('http://openweathermap.org/img/wn/'+response.data.list[2].weather[0].icon +'@2x.png')
				setTemp2(response.data.list[2].main.temp.toFixed())
				setDesc2(response.data.list[2].weather[0].main)

				setTime3(c + ':00')
				setIcon3('http://openweathermap.org/img/wn/'+response.data.list[3].weather[0].icon +'@2x.png')
				setTemp3(response.data.list[3].main.temp.toFixed())
				setDesc3(response.data.list[3].weather[0].main)

				setTime4(d + ':00')
				setIcon4('http://openweathermap.org/img/wn/'+response.data.list[4].weather[0].icon +'@2x.png')
				setTemp4(response.data.list[4].main.temp.toFixed())
				setDesc4(response.data.list[4].weather[0].main)

				setTime5(e + ':00')
				setIcon5('http://openweathermap.org/img/wn/'+response.data.list[5].weather[0].icon +'@2x.png')
				setTemp5(response.data.list[5].main.temp.toFixed())
				setDesc5(response.data.list[5].weather[0].main)
			})
		}
		setLocation('')		
	}

	// Function to search for location on button click
	const searchLocationBtn = () => {
		axios.get(url2).then((response) => {
			// Set state variables with data from the API response
			setData(response.data)
			setIcon('http://openweathermap.org/img/wn/'+response.data.list[0].weather[0].icon +'@2x.png')				
			setTemp(response.data.list[0].main.temp.toFixed())
			setFeelsLike(response.data.list[0].main.feels_like.toFixed())
			setWindSpeed(response.data.list[0].wind.speed.toFixed())
			setHumidity(response.data.list[0].main.humidity)
			setWeather(response.data.list[0].weather[0].main)								

			// Extract data for the 5-day forecast
			const a = new Date(response.data.list[1].dt_txt).getHours();
			const b = new Date(response.data.list[2].dt_txt).getHours();
			const c = new Date(response.data.list[3].dt_txt).getHours();
			const d = new Date(response.data.list[4].dt_txt).getHours();
			const e = new Date(response.data.list[5].dt_txt).getHours();

			setTime1(a + ':00')
			setIcon1('http://openweathermap.org/img/wn/'+response.data.list[1].weather[0].icon +'@2x.png')
			setTemp1(response.data.list[1].main.temp.toFixed())
			setDesc1(response.data.list[1].weather[0].main)

			setTime2(b + ':00')
			setIcon2('http://openweathermap.org/img/wn/'+response.data.list[2].weather[0].icon +'@2x.png')
			setTemp2(response.data.list[2].main.temp.toFixed())
			setDesc2(response.data.list[2].weather[0].main)

			setTime3(c + ':00')
			setIcon3('http://openweathermap.org/img/wn/'+response.data.list[3].weather[0].icon +'@2x.png')
			setTemp3(response.data.list[3].main.temp.toFixed())
			setDesc3(response.data.list[3].weather[0].main)

			setTime4(d + ':00')
			setIcon4('http://openweathermap.org/img/wn/'+response.data.list[4].weather[0].icon +'@2x.png')
			setTemp4(response.data.list[4].main.temp.toFixed())
			setDesc4(response.data.list[4].weather[0].main)

			setTime5(e + ':00')
			setIcon5('http://openweathermap.org/img/wn/'+response.data.list[5].weather[0].icon +'@2x.png')
			setTemp5(response.data.list[5].main.temp.toFixed())
			setDesc5(response.data.list[5].weather[0].main)
       
			

			

			
		})
		setLocation('')
	}
   

	// useEffect to show an alert on page load
	useEffect(() => {
		window.onload = () => {
		  alert('Enter a location in the search bar to show data');
		};
	  
		const threshold = 20; // Temperature threshold in Celsius
	  
		// Check the temperature and set the background accordingly
		if (parseFloat(temp) > threshold) {
		  setBg(hotBg);
		} else {
		  setBg(coldBg);
		}
	
}); 
	  

	return (
		<div style = {{backgroundImage: `url(${bg})`}}>
		<div className="container">
			{/* Search bar */}
			<div className="search-bar">	
				<input 
					type="text" 
					val={location}
					onChange={event => setLocation(event.target.value)}
					onKeyPress={searchLocation}
					placeholder="Enter location"
				/>
				<button className="search-btn" onClick={searchLocationBtn}>
					<FontAwesomeIcon icon={faMagnifyingGlass}/>
				</button>											
			</div>
			{/* City statistics */}
			<div className="city-stats">
				<div className="City">
				<h1>{data.city ? data.city.name : null}</h1>
				</div>
				<div className="icon-temp">
					{/* <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon" /> */}
					{/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="image" /> */}
					<img src={icon} alt="" />
					<h3>{temp} °C</h3>
				</div>
				<p className="description">{weather}</p>
				<div className="other-stats">
					<div className="stat">
						<p className="title">Feels Like</p>
						<svg stroke="#fff" fill="#fff" stroke-width="0" viewBox="0 0 256 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M192 384c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64zm32-84.653c19.912 22.563 32 52.194 32 84.653 0 70.696-57.303 128-128 128-.299 0-.609-.001-.909-.003C56.789 511.509-.357 453.636.002 383.333.166 351.135 12.225 321.755 32 299.347V96c0-53.019 42.981-96 96-96s96 42.981 96 96v203.347zM208 384c0-34.339-19.37-52.19-32-66.502V96c0-26.467-21.533-48-48-48S80 69.533 80 96v221.498c-12.732 14.428-31.825 32.1-31.999 66.08-.224 43.876 35.563 80.116 79.423 80.42L128 464c44.112 0 80-35.888 80-80z"></path></svg>
						<p className="units">{feels_like} °C</p>
					</div>
					<div className="stat">
						<p className="title">Wind Speed</p>
						<svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
						<p className="units">{windspeed} km/h</p>
					</div>
					<div className="stat">
						<p className="title">Humidity</p>
						<svg stroke="#fff" fill="currentColor" stroke-width="0" viewBox="0 0 30 30" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg"><path d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
							c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
							s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
							c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
							S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
							c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
							C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
							s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
							c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
							c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
							c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
							M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
							c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
							c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
							c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
							c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
							l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
							"></path>
						</svg>
						<p className="units">{humidity} %</p>
					</div>
				</div>
			</div>

			<div className="daily-summary">
				<h4>3 Hour Interval</h4>
				<div className="summary-container">
					<div className="summary sum1">
						<p className="day">{time1}</p>
						<div className="icon-weather">
							<img src={icon1} alt="icon" />
							<p>{temp1} °C</p>
						</div>
						<p className="summary-description">{desc1}</p>
					</div>
					<div className="summary sum2">
						<p className="day">{time2}</p>
						<div className="icon-weather">
							<img src={icon2} alt="icon" />
							<p>{temp2} °C</p>
						</div>
						<p className="summary-description">{desc2}</p>
					</div>
					<div className="summary sum3">
						<p className="day">{time3}</p>
						<div className="icon-weather">
							<img src={icon3} alt="icon" />
							<p>{temp3} °C</p>
						</div>
						<p className="summary-description">{desc3}</p>
					</div>
					<div className="summary sum4">
						<p className="day">{time4}</p>
						<div className="icon-weather">
							<img src={icon4} alt="icon" />
							<p>{temp4} °C</p>
						</div>
						<p className="summary-description">{desc4}</p>
					</div>
					<div className="summary sum5">
						<p className="day">{time5}</p>
						<div className="icon-weather">
							<img src={icon5} alt="icon" />
							<p>{temp5} °C</p>
						</div>
						<p className="summary-description">{desc5}</p>
					</div>
				</div>
			</div>

		</div>
		</div>
	);
}

export default App;
