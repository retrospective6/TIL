import styled from '@emotion/styled';
import FONT from '@/styles/font';
import { css } from '@emotion/react';

export const Container = styled.div`
  max-width: 1104px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Month = styled.span`
  ${FONT.title1};
`;

export const Days = styled.ul`
  display: flex;
  ${FONT.body4}
`;

interface DayProps {
  day: number;
}

export const Day = styled.li<DayProps>`
  margin-left: 16px;
  color: ${({ day }) => getColor(day)};
`;

const getColor = (day: number) => {
  if (day !== 0 && day !== 6) {
    return '#000000';
  }
  if (day === 6) {
    return '#0068d5';
  }
  return '#c90909';
};

export const PostList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, 264px);
  column-gap: 16px;
  row-gap: 38px;
`;
