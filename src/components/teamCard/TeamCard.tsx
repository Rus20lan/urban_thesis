import { FC } from 'react';
import { ITeam } from '../../interface/ITeam';
import './style.css';

type Props = {
  team: ITeam;
};

const TeamCard: FC<Props> = ({ team }) => {
  const { imgUrl, name, role } = team;
  return (
    <div className="team_card_wrapper">
      <div className="team_img_wrapper">
        <img src={imgUrl} />
      </div>
      <h3 className="team_name">{name}</h3>
      <p className="font_family">{role}</p>
    </div>
  );
};

export default TeamCard;
