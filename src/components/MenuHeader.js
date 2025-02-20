import React from 'react';

const MenuHeader = ({ logoImgName, slogan1, slogan2 }) => {
    return (
      <div>
        <div class="row">
          <div class="col">
            <img class="logo" src={`${process.env.PUBLIC_URL}/images/${logoImgName}`} alt="JBites logo" />
          </div>
        </div>
        <div class="row">
          <div class="col sloganCol">
            <p class="slogan1">{slogan1}</p>
            <p class="slogan2">{slogan2}</p>
          </div>
        </div>
      </div>
    );
};

export default MenuHeader;