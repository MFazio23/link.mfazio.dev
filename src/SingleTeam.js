import {Link, useParams} from "react-router-dom";
import teams from "./teams.json"

export default function SingleTeam() {
    let {teamId} = useParams();

    const team = teams.find(team => team.teamId === teamId);

    return (
        <div className="centered-container">
            <h2 className="page-header">{team.name}</h2>
            <div>
                <a className="team-logo-link" href={team.deepLinkUrl}>
                    <img className="team-logo" src={team.logoUrl} title={`${team.name} Logo`}/>
                </a>
            </div>
            <Link to="/teams">Back to Teams</Link>
        </div>
    )
}