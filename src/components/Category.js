import React from "react";

export default function Category() {
  return (
    <React.Fragment>
      <div className="category1 col-xxl-12 col-xl-12">
        <img
          src="https://motionarray.imgix.net/preview-71322-39bArOLq3P_0001.jpg"
          className="img1 img-fluid"
        />

        <div className="nav">
          <div></div>

          <img
            className="img2 img-fluid"
            src="https://alan.app/voice/images/branding_page/logo-horizontal/color/alan-logo-horizontal-color.png"
          />
        </div>

        <div className="category1-part1">
          <h1 className="display-5">READ LATEST NEWS HEADLINES</h1>
          <p>Functions using Voice Assistant</p>
        </div>
      </div>

      <div className="category2 col-xxl-6 col-xl-6 col-md-6" style = {{alignItems: "flex-end"}}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70%",
            borderRight: "1px white solid",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style = {{width: "100%",  display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",}}>
            <h1>News Related to News Channels</h1>
            <p>Channels: CNN, BBC NEWS, ......</p>
            <p>Say "Give me news from CNN"</p>
          </div>

          <div style = {{width: "100%",  display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",}}>
            <h1>News Related to Everything</h1>
            <p>Say anything here: CORONAVIRUS, BILL GATES, ...</p>
            <p>Say "Tell me about CORONAVIRUS"</p>
          </div>
        </div>
      </div>

      <div className="category2 col-xxl-6 col-xl-6 col-md-6">
        <img src="https://www.iilsindia.com/blogs/wp-content/uploads/2018/04/The-legal-position-of-Voice-identification-in-India.jpeg" />
      </div>
    </React.Fragment>
  );
}
