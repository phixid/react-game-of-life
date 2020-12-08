import Colony from "../components/Colony";
import {mockColony} from "../data/mock-colony";
import styled from "styled-components";

export const Home = () => {
    return <StyledCenteringWrapper>
        <Colony colony={ mockColony } />
    </StyledCenteringWrapper>;
};

const StyledCenteringWrapper = styled('div')`
  align-items: center;
  display: flex;
  height: 98vh;
  justify-content: center;
  width: 100%;
`;
