//Test Data
const movies = [
    {title: "Die Hard", genre: "action"},
    {title: "Braveheart", genre: "action"},
    {title: "Space Balls", genre: "comedy"},
    {title: "50 First Dates", genre: "comedy"},
    {title: "It Follows", genre: "horror"},
    {title: "Saw", genre: "horror"}
];
const {title, genre} = movies
const [selectedGenre, setSelectedGenre] = useState("")
const DropDown = () => {
     return (
        <div className="dropdown"><form>
                <select className="menu">
                    <option>
                        Select Movie Genre
                    </option>
                    <option className="menu-item">
                        Action
                    </option>
                    <option className="menu-item">
                        Comedy
                    </option>
                    <option className="menu-item">
                        Horror
                    </option>
                </select>
            <button>Fetch Movie</button>
            </form>
        </div>
    );
};

export default DropDown