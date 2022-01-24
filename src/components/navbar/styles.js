import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    // padding: 10px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    // background-color: #0d2538;
    background-color: #394c5c;
    position: fixed;
    // transform: ${({ open }) =>
      open ? 'translateX(0)' : 'translateX(100%)'};
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    // top: 0;
    top: 3.6rem;
    // rigth: 0;
    left: 0;
    height: 100vh;
    // width: 300px;
    width: 100vw;
    // padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
