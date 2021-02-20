import React from 'react';
import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import SingleTeam from "./SingleTeam";
import teams from "./teams.json"


export default function Team() {
    let match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:teamId`}>
                    <SingleTeam/>
                </Route>
                <Route path={match.path}>
                    <h1 className="page-header">ABL Team Deep Links</h1>

                    <div className="team-grid">
                        {teams.map(team => (
                            <div className="team-grid-item" key={team.teamId}>
                                <a className="team-logo-link" href={team.deepLinkUrl}>
                                    <img className="team-logo" src={team.logoUrl} title={`${team.name} Logo`}/>
                                </a>
                                <span className="team-name">{team.name}</span>
                            </div>
                        ))}
                    </div>
                </Route>
            </Switch>
        </div>
    )
}