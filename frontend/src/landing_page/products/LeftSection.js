import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <img src={imageURL} />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h2>{productName}</h2>
          <p
            className="mt-3"
            style={{ fontSize: "18px", lineHeight: "1.7", fontWeight: "400" }}
          >
            {productDescription}
          </p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "100px", textDecoration: "none" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-5"></div>
        <div className="col-2"></div>
        <div className="col-5"></div>
      </div>
    </div>
  );
}

export default LeftSection;
