import {styled} from "styled-components";

export const UI = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
