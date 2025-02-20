import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id }) => {
    return (
        <div class="row menuItem">
            <div class="col-4 itemImgCol">
                <img class="itemImg" src={`${process.env.PUBLIC_URL}/images/${id.imageName}`} alt={id.title} />
            </div>
            <div class="col-8">
                <p class="itemName">{id.title}</p>
                <p>{id.description}</p>
                <div class="row">
                    <div class="col">
                        <p class="price">${id.price}</p>
                    </div>
                    <div class="col addItemButtonCol">
                        <button class="addItemButton">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
