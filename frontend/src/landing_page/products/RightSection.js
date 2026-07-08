import React from 'react';

function RightSection( {imageURL,
  productName,
  productDescription,
  learnMore}) {
    return (
        <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 style={{marginTop:"30%"}}>{productName}</h2>
          <p
            className="mt-3"
            style={{ fontSize: "18px", lineHeight: "1.7", fontWeight: "400" }}
          >
            {productDescription}
          </p>
          <div>
            <a
              href={learnMore}
              style={{ marginLeft: "100px", textDecoration: "none" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
         <div className="col">
          <img src={imageURL} />
        </div>
      </div>
    </div>
    )
        
    
}

export default RightSection;