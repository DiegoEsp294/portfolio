import React from "react"

const Card = ({ heading, paragraph, technologies, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")"
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <h2 className="text">{technologies}</h2>
        <div style={{padding: '20px'}}>
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
