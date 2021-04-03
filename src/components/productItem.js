import React from 'react'

function ProductItem() {
    return (
        <div class="card" >
            <img src={'img/1.png'} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">IPhone 11 Pro</h5>
                <p class="card-text">$100</p>
                <a href="#" class="btn btn-block btn-primary">Details</a>
            </div>
        </div>
    );
}

export default ProductItem