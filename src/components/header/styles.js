import styled from 'styled-components';

export const HeaderStyles = styled.header`
  font-size: 1.25rem;
  background-color: #557a95;
  width: 100%;
  heigth: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 5px 0;
    text-decoration: none;
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    // justify-content: center;
  }
`;

export const RightHeader = styled.div`
  // width: 50px;
  width: 5rem;

  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  color: #f5f5f5;
  // padding: 50px;
`;

export const HeaderWave = styled.span`
  position: relative;
  top: 1px;
  font-size: 30px;
  margin-right: 5px;
`;
