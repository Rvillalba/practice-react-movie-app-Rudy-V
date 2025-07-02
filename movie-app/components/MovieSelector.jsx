import {useState} from "react";
//Test Data
const movies = [
    {id: 1, title: "Die Hard", genre: "Action"},
    {id: 2, title: "Braveheart", genre: "Action"},
    {id: 3, title: "Space Balls", genre: "Comedy"},
    {id:4, title: "50 First Dates", genre: "Comedy"},
    {id: 5, title: "It Follows", genre: "Horror"},
    {id: 6, title: "Saw", genre: "Horror"}
];
const DropDown = () => {
const [selectedGenre, setSelectedGenre] = useState("");
const handleChange = (event) => {
    setSelectedGenre(event.target.value);
};
const filteredMovies = selectedGenre === '' ? movies : movies.filter(movie => movie.genre === selectedGenre)
     return (
        <div className="dropdown">
            <h1>Select Movie Genre Filter</h1>
            <select onChange={handleChange} value={selectedGenre}>
                    <option className="menu-item" value=""> All Genres</option>
                    <option className="menu-item" value="Action" >Action</option>
                    <option className="menu-item" value="Comedy" >Comedy</option>
                    <option className="menu-item" value="Horror" >Horror</option>
                </select>
            <button>Fetch Movie</button>
            <h2>Movies:</h2>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        {movie.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}
export default DropDown