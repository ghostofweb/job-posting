import { useEffect, useState } from "react";
import axios from "axios"

const useFetch = ()=>{
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)
    const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/estimated-salary',
  params: {
    job_title: 'python',
    location_type: 'ANY',
    years_of_experience: 'ALL'
  },
  headers: {
    'x-rapidapi-key': 'd6ae0d57f9msh55fb1ae1ec6f3f2p1e474ejsna390869f234f',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();
}