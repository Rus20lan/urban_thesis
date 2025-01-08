import './style.scss';
import team_figure from '../../images/team_figure.svg';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { useEffect } from 'react';
import { getTeam } from '../../redux/team/teamSlice';
import TeamCard from '../teamCard/TeamCard';
import ContentTitle from '../contentTitle/ContentTitle';

const Team = () => {
  const dispatch = useAppDispatch();
  const { team } = useAppSelector((state) => state.team);

  useEffect(() => {
    dispatch(getTeam());
  }, []);

  return (
    <div className="team_area">
      <div className="team_bg_figure">
        <img src={team_figure} />
      </div>
      <div className="team_content_wrapper">
        <ContentTitle text="Наша команда" color={{ color: '#fff' }} id="team" />
        <div className="team_cards_wrapper">
          {team.map((tm, index) => (
            <TeamCard key={index} team={tm} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
