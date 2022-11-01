import axios from 'axios'

const ENDPOINT = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '2077199532msh10374b7feea5db7p19435ajsna74956be7511',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchAPI = async(url) => {
    const {data} = await axios.get(`${ENDPOINT}/${url}`, options)
    return data;
  }