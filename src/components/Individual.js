import styled from 'styled-components';
import { borderColor } from '../constants';

const Individual = ({ individual = 0 }) => <StyledIndividual alive={individual === 1} />;

const aliveColor = '#9fcfff';
const size = '2rem';
const StyledIndividual = styled('div')`
  background: ${(props) => (props.alive ? aliveColor : '#ffffff')};
  border-right: 1px solid ${borderColor};
  display: flex;
  flex: 1 1 0;
  flex-direction: row;
  height: ${size};
  width: ${size};
`;

export default Individual;
