import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;

  /* table */
  td,
  th {
    padding-left: 1rem;
  }
  tbody {
    &:empty {
      display: none;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  /* indicator */
  .indicator {
    text-align: center;
    border-top: none;
    padding: 20vh;
    margin-top: -1rem;
    border-radius: 0;

    &.not-visible {
      display: none;
    }
  }
`;
