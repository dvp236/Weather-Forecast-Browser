import axios from 'axios';

const API_KEY = 'a38fe95c4805d69a44f5731a355ff4f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//middleware -- like gate keeper.. stop action and inspect it 
//manipulate actions and decide if we want to send it to reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}