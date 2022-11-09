import React from "react";
import ListItem from "../JobItem/ListItem";


const Jobs = ({ jobs, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="jobs ">
            {jobs.map((item, index) => (
                <ListItem key={item.id} item={item} index={index} />
            ))}
        </div>
    );
};

export default Jobs;