import React, { useState } from "react";

function InputBar({inputValue,changeValue,clearFunc}){

    const displayClear = inputValue.length > 0;

    return (
        <div>
            <input type="text" value={inputValue} onChange={changeValue} /> 
            {displayClear ? <button onClick={clearFunc}>Clear</button> : null}
        </div>
    )
}

function DisplayProducts({filteredArr}){

    return (
        <div className="container">
          <div className="row">
            {filteredArr.map(function (product) {
              return (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.title}
                      style={{ width: '100px' }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">Category: {product.category}</p>
                      <p className="card-text">Price: ${product.price}</p>
                      <p className="card-text">
                        Rating: {product.rating.rate} ({product.rating.count} reviews)
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );      
}

function SearchBar({productList}){

    const [inputValue, setInputValue] = useState('');

    const changeValue = function(e){
        setInputValue(e.target.value);
    }

    const clearFunc = function(){
        setInputValue('');
    }

    const filteredArr = productList.filter(function(product){
        const productTitle = product.title.toLowerCase();
        return productTitle.includes(inputValue.toLowerCase());
    });

    return (
        <div>
            <InputBar inputValue={inputValue} changeValue={changeValue} clearFunc={clearFunc} />
            <DisplayProducts filteredArr={filteredArr} />
        </div>
    )
}

export default SearchBar;