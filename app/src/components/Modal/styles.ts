import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  &.is-visible {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

export const ModalHeaderWrap = styled.div`
  &.is-inline {
    display: flex;
    justify-content: space-between;
  }
`;
