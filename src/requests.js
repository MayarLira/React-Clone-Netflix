const API_KEY = "9bb7ebee57ce8bcab2b53bde32862453";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
};

export default requests;

