import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

const NotFound = () => {
  return (
    <div  className="not-found-page">
      <div className="not-found-container">
        <p className="error-code">404 - PERDU</p>
        <p className="error-text">Ceci signifie que vous êtes dans une voie sans issue. Mais comme Weather Football a tout prévu,
          nous vous tendons la main dans ce moment difficile pour vous permettons de retrouver votre
          chemin en appuyant sur ce bouton :</p>
        <div className="error-button">
          <CustomButton className="custom-link" to='/team' exact="true">Je retrouve mon chemin...</CustomButton>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
