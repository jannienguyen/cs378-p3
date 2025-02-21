import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, itemCounts, setItemCounts, setTotal }) => {
    const addItem = () => {
        setItemCounts(prevItemCounts => {
            const newItemCounts = new Map(prevItemCounts);
            if (newItemCounts.has(id.title)) {
                newItemCounts.set(id.title, newItemCounts.get(id.title) + 1);
            } else {
                newItemCounts.set(id.title, 1);
            }
            setTotal(prevTotal => prevTotal + id.price);
            return newItemCounts;
        });
    };

    const removeItem = () => {
        setItemCounts(prevItemCounts => {
            const newItemCounts = new Map(prevItemCounts);
            if (newItemCounts.has(id.title)) {
                if (newItemCounts.get(id.title) === 1) {
                    newItemCounts.delete(id.title);
                } else {
                    newItemCounts.set(id.title, newItemCounts.get(id.title) - 1);
                }
                setTotal(prevTotal => prevTotal - id.price > 0 ? prevTotal - id.price : 0);
            }
            return newItemCounts;
        });
    };

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
                        <button class="itemCountButton" onClick={removeItem}>-</button>
                        <p>{itemCounts.has(id.title) ? itemCounts.get(id.title) : 0}</p>
                        <button class="itemCountButton" onClick={addItem}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
