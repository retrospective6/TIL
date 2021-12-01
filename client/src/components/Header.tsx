import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { NAV_ITEMS, NAV_LINKS } from '@/utils/constants';
import User from '@/types/User';
import SearchInput from '@/components/SearchInput';

export interface HeaderProps {
  active: NAV_LINKS;
  user?: User;
  onSignUp: () => void;
  onSignIn: () => void;
  onSearch: (value: string) => void;
}

export default function Header(props: HeaderProps): JSX.Element {
  const { active, user, onSignUp, onSignIn, onSearch } = props;

  return (
    <Container>
      <Navbar>
        <Logo data-testid="logo">
          <Link href="/">로고</Link>
        </Logo>
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.testId}
            data-testid={item.testId}
            selected={active === item.href}
          >
            <Link href={item.href}>{item.title}</Link>
          </NavItem>
        ))}
        <SearchInput
          onSearch={onSearch}
          placeholder={
            '아이디, 닉네임, 태그, 텍스트와 본문을 검색해볼 수 있습니다'
          }
        />
      </Navbar>
      <UserInfo>
        {user ? (
          <>
            <UserImage src={user.image} alt="user-image" />
            <UserInfoItem data-testid="user-nickname">
              {user.nickname} 님
            </UserInfoItem>
          </>
        ) : (
          <>
            <UserInfoItem data-testid="sign-up" onClick={onSignUp}>
              회원가입
            </UserInfoItem>
            <UserInfoItem data-testid="sign-in" onClick={onSignIn}>
              로그인
            </UserInfoItem>
          </>
        )}
      </UserInfo>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 64px;
  background-color: #f3f3f3;
  justify-content: center;
  padding-left: 76px;
  align-items: center;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 18px;
  line-height: 16px;
`;

const Logo = styled.div`
  width: 77px;
`;

interface NavItemProps {
  selected: boolean;
}

const NavItem = styled.div<NavItemProps>`
  display: flex;
  align-items: center;
  height: 14px;
  margin-right: 18px;
  padding-right: 18px;
  border-right: 1px solid #cdcdcd;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const UserInfo = styled.div`
  display: flex;
  margin-left: auto;
  width: 12.5%;
  min-width: 140px;
  align-items: center;
`;

const UserInfoItem = styled.button`
  margin-right: 20px;
  font-size: 12px;
`;

const UserImage = styled.img`
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 50%;
`;
