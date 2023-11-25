import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const GoToBtn = ({ btnTitle, url }) => {
    return (
        <Link to={url} className="btn btn-info mx-auto flex w-max">{btnTitle} <FaArrowRight /></Link>
    );
};

export default GoToBtn;