import styled from 'styled-components';
import Tribe from './Tribe';
import { borderColor } from '../constants';

const Colony = ({ colony = [] }) => {
  return (
    <StyledColony>
      {colony.map((tribe, i) => (
        <Tribe tribe={tribe} key={i} />
      ))}
    </StyledColony>
  );
};

const StyledColony = styled('div')`
  border: 1px solid ${borderColor};
  display: inline-flex;
  flex: 0 0 0;
  flex-direction: column;
`;

export default Colony;
