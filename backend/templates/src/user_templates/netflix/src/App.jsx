import React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import MovieCard from './Components/MovieCard';
import Footer from './Components/Footer';

const movies = [
  { title: 'Inception', year: 2010, image: 'https://movieswithaplottwist.com/wp-content/uploads/2016/03/Inception-movie-poster.jpg', description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.' },
  { title: 'Interstellar', year: 2014, image: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
  { title: 'The Dark Knight', year: 2008, image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.' },
  { title: 'The Matrix', year: 1999, image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg', description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.' },
  { title: 'Pulp Fiction', year: 1994, image: 'https://picfiles.alphacoders.com/381/thumb-1920-381365.jpg', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.' },
  { title: 'Fight Club', year: 1999, image: 'https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg', description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.' },
  { title: 'Forrest Gump', year: 1994, image: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg', description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.' },
  { title: 'The Shawshank Redemption', year: 1994, image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
  { title: 'The Godfather', year: 1972, image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' }
];

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#FFFFFF' }}>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <Container style={{ width: '80%' }}>
        <Grid container spacing={3} style={{ padding: '20px' }}>
          {filteredMovies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MovieCard title={movie.title} year={movie.year} image={movie.image} description={movie.description} />
            </Grid>
          ))}
        </Grid>
        <div style={{ width: '80%', margin: '20px auto', padding: '20px', backgroundColor: '#1c1c1c', borderRadius: '10px' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <img src="https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGw0OgMi8.jpg" alt="Dangal" style={{ width: '100%', borderRadius: '10px' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" style={{ color: '#FF0000', marginBottom: '10px' }}>Dangal</Typography>
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                Dangal is a 2016 Indian Hindi-language biographical sports drama film directed by Nitesh Tiwari. It stars Aamir Khan as Mahavir Singh Phogat, a
                pehlwani amateur wrestler who trains his daughters Geeta Phogat and Babita Kumari to become India&apos;s first world-class female wrestlers.
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Box mt={5}>
          <Typography variant="h4" style={{ color: '#FF0000', marginBottom: '20px' }}>Trending Now</Typography>
          <Grid container spacing={3}>
            {movies.slice(0, 3).map((movie, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MovieCard title={movie.title} year={movie.year} image={movie.image} description={movie.description} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
