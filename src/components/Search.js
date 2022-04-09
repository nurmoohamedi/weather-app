import {useState} from "react";

const Search = ({onSubmit}) => {

    const [location, setLocation] = useState();

    const handleSubmit = (e) => {

        e.preventDefault();
        // console.log(location)
        onSubmit(location);

    }

    return (
        <div className="search">

            <div className="header">
                Weather <span>Forecast</span>
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="Enter Location..."
                />
                <button type="submit" className="search__button">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search;