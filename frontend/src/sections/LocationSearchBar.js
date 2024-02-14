import '../styles/LocationSearch.css'

export default function Search() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return(
        <div>
            <form id = "loc-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="location-search"
                    id="location-search"
                    className="location-input"
                    placeholder='Enter a location'
                />
                <button id = "loc-button" type = "submit">Search</button>
            </form>
        </div>
    );
}