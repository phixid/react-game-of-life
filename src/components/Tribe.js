import styled from 'styled-components';
import Individual from './Individual';
import { borderColor } from '../constants';

const Tribe = ({ tribe = [] }) => {
  return (
    <StyledTribe>
      {tribe.map((individual, i) => (
        <Individual individual={individual} key={i} />
      ))}
    </StyledTribe>
  );
};

const StyledTribe = styled('div')`
  border-bottom: 1px solid ${borderColor};
  display: flex;
  flex-direction: row;
`;

export default Tribe;
