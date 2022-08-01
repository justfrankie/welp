import React from 'react';

let List = (props) => {
    return(
        <div id="listDiv">
            {props.restaurants.map((item, key) => (
                <div className="individual_container" key={key}>
                <div id="restaurantItems">{`${item.restaurant}`}</div>
                    <div className="cross_button" onClick={  () => props.handleDeleteOne(item.id)  }>x</div>
                </div>
            ))}
        </div>
    )
}

export default List;