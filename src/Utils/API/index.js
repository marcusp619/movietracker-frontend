import { key } from './API_KEY';

export const fetchMovies = async() => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}

export const postNewUser = (newUserInfo) => {
  console.log(newUserInfo)
  fetch('http://localhost:3000/api/users/new',{ 
    method: "POST",
    body: JSON.stringify({...newUserInfo}),
    headers:{'Content-Type': 'application/json'},
  })
  .then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));
}

export const checkUser = async (userInfo) => {
  console.log(userInfo)
  const response = await fetch('http://localhost:3000/api/users',{
	method: "POST",
	body: JSON.stringify(userInfo),
	headers:{'Content-Type': 'application/json'},
  })
  const result = await response.json()
  const { name, email, id } = result.data
  return { name, email, id }
}
