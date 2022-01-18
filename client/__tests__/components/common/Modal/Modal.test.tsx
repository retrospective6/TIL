import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import Modal, { ModalProps } from '@/components/common/Modal/Modal';

const DEFAULT_ARGS: ModalProps = {
  children: <></>,
  onClose: jest.fn(),
};

const renderModal = (props: Partial<ModalProps>): RenderResult => {
  return render(
    <Modal {...DEFAULT_ARGS} {...props}>
      {props.children || DEFAULT_ARGS.children}
    </Modal>,
  );
};

describe('with onClose method', () => {
  test('run method on click wrapper', () => {
    const onClose = jest.fn();

    const { getByTestId } = renderModal({ onClose });
    const wrapper = getByTestId('modal-wrapper');
    fireEvent.click(wrapper);

    expect(onClose).toBeCalled();
  });

  test('does not run method on click container', () => {
    const onClose = jest.fn();

    const { getByTestId } = renderModal({ onClose });
    const container = getByTestId('modal-container');
    fireEvent.click(container);

    expect(onClose).not.toBeCalled();
  });
});
