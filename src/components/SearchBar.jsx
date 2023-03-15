import { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({ setSearchQuery }) => {
    const queryRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(queryRef.current);
    }

    return (
        <form className="my-2" onSubmit={handleSubmit}>
            <TextField
                id="search-bar"
                className="text"
                label="Search"
                variant="outlined"
                placeholder="Search recipes..."
                size="small"
                onInput={(e) => queryRef.current = (e.target.value)}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "dodgerblue" }} />
            </IconButton>
        </form>);
};

export default SearchBar;