import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as Styled from './LoginModal.styles';

import Modal from './Modal';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import CloseIcon from '@/assets/icon/CloseIcon.svg';

export interface LoginFormProps {
  email: string;
  password: string;
}

export interface LoginModalProps {
  onClose: () => void;
  onSubmit: (values: LoginFormProps) => void;
}

export default function LoginModal(props: LoginModalProps): JSX.Element {
  const { onClose, onSubmit } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmitValue = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <Modal onClose={onClose}>
      <Styled.Container>
        <Styled.Header>
          <Styled.Title>이메일 로그인</Styled.Title>
          <CloseIcon onClick={onClose} data-testid="modal-close" />
        </Styled.Header>
        <Styled.Form data-testid="login-modal" onSubmit={onSubmitValue}>
          <TextInput
            data-testid="email-input"
            title="이메일"
            width="100%"
            onChange={onChangeEmail}
          />
          <TextInput
            data-testid="password-input"
            type="password"
            title="비밀번호"
            width="100%"
            onChange={onChangePassword}
          />
          <Button
            type="submit"
            data-testid="submit-button"
            variant="primary"
            width="100%"
          >
            로그인
          </Button>
        </Styled.Form>
      </Styled.Container>
    </Modal>
  );
}
