import React from "react";
import TeamGamesSection from "../../components/team-sections/team-games.component";
import TeamGoalsSection from "../../components/team-sections/team-goals.component";
import TeamGraphsSection from "../../components/team-sections/team-graphs.component";
import './team-page.styles.css'

const TeamPage = () => {

  return (
    <div className="team-page">
      <div className="top-left">
        <div className="team-infos">
          <div className="team-infos-pic">
            <img src="#" alt="team pic"/>
          </div>
          <div className="team-infos-details">
            <p>Team Name</p>
            <p>City</p>
            <p>Last Year Position</p>
            <p>Avg position over the years</p>
          </div>
          <div className="team-infos-main-predictions">
            This is the main prediction part
          </div>
        </div>
      </div>
      <div className="top-right">
        <TeamGamesSection />
      </div>
      <div className="bottom-left">
        <TeamGoalsSection />
      </div>
      <div className="bottom-right">
        <TeamGraphsSection />
      </div>
    </div>
  )
}

export default TeamPage;
