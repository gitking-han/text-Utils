import React from "react";

export default function About(props) {
  // Simple style based on theme mode
  const myStyle = {
    backgroundColor:
      props.mode === "dark"
        ? "#032744"
        : props.mode === "green"
        ? "#013220"
        : props.mode === "yellow"
        ? "#fff9d6"
        : "white",
    color:
      props.mode === "dark" || props.mode === "green"
        ? "white"
        : props.mode === "yellow"
        ? "#333"
        : "black",
  };

  return (
    <div className="container mt-3 p-3" style={myStyle}>
      <h2>About Us</h2>

      <div className="accordion" id="accordionExample">
        {/* Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Quickly inspect and transform your text with smart tools for analysis and cleanup.</strong>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Enjoy full features at no cost—no sign-up, no hidden charges.</strong>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Runs smoothly on all modern browsers without any installations.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
