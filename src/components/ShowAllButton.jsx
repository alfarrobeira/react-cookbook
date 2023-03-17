import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default ({ setSearchQuery }) => {
    const navigate = useNavigate();

    return (
        // using navigate hook with "-1" simulates hitting the back button
        <Button className="showAllButton py-0" onClick={e => {
            navigate("/recipes");
            setSearchQuery("");
        }}>Show All</Button>
    );
}