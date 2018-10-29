import { key } from "./API_KEY";

export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const postNewUser = async newUserInfo => {
  const response = await fetch("http://localhost:3000/api/users/new", {
    method: "POST",
    body: JSON.stringify({ ...newUserInfo }),
    headers: { "Content-Type": "application/json" }
  });
  const result = await response.json();
  return result;
};

export const checkUser = async userInfo => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: { "Content-Type": "application/json" }
  });
  const result = await response.json();
  console.log(result);
  const { name, email, id } = result.data;
  return { name, email, id };
};

export const addFav = async favInfo => {
  const response = await fetch(
    "http://localhost:3000/api/users/favorites/new",
    {
      method: "POST",
      body: JSON.stringify(favInfo),
      headers: { "Content-Type": "application/json" }
    }
  );
  const result = await response.json();
  console.log("Success:", JSON.stringify(result));
};

export const getFavorites = async userId => {
  const response = await fetch(
    `http://localhost:3000/api/users/${userId}/favorites`
  );
  const result = await response.json();
  return result.data;
};

export const removeFavorites = async (favInfo) => { 
  try {
    const response = await fetch(`http://localhost:3000/api/users/${favInfo.user_id}/favorites/${favInfo.movie_id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          movie_id: favInfo.movie_id,
          user_id: favInfo.user_id,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }
  catch (error) {
    console.log(error.message)
  }
}
