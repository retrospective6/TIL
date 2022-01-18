import React, { ChangeEvent, FormEvent, useState } from 'react';
import * as Styled from './WriteModal.styles';

import Modal from '@/components/common/Modal/Modal';
import ImgSelector from '@/components/common/ImgSelector';
import TagInput from '@/components/write/Modal/TagInput';
import RadioGroup from '@/components/common/RadioGroup';
import Button from '@/components/common/Button';
import PlusIcon from '@/assets/icon/PlusIcon.svg';

import { THUMBNAIL_GRADIENTS, VISIBLE_LEVELS } from '@/constants';
import Post, { ThumbnailGradient, VisibleLevel } from '@/types/Post';

export type WriteModalFormProps = Pick<
  Post,
  'thumbnail' | 'summary' | 'tags' | 'visibleLevel'
>;

export interface WriteModalProps {
  onClose: () => void;
  onSubmit: (values: WriteModalFormProps) => void;
}

export default function WriteModal(props: WriteModalProps): JSX.Element {
  const { onClose, onSubmit } = props;
  const [gradient, setGradient] = useState<ThumbnailGradient>();
  const [img, setImg] = useState<string>();
  const [summary, setSummary] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [visibleLevel, setVisibleLevel] = useState<VisibleLevel>(
    VISIBLE_LEVELS[0].value,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({
      thumbnail: { img, gradient },
      summary,
      tags,
      visibleLevel,
    });
  };

  const handleClickColorSelector = (selected: ThumbnailGradient) => () => {
    setGradient(selected);
    setImg(undefined);
  };

  const handleSelectThumbnail = (selected: string) => {
    setImg(selected);
    setGradient(undefined);
  };

  const handleChangeSummary = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setSummary(value);
  };

  const handleChangeTags = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleChangeVisible = (value: string) => {
    setVisibleLevel(value as VisibleLevel);
  };

  return (
    <Modal onClose={onClose}>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Column>
          <Styled.Cell>
            <Styled.Title>썸네일 미리보기</Styled.Title>
            <Styled.ColorList>
              <Styled.ColorListText>썸네일 컬러</Styled.ColorListText>
              {THUMBNAIL_GRADIENTS.map((color, i) => (
                <Styled.ColorListItem
                  key={i}
                  {...color}
                  onClick={handleClickColorSelector(color)}
                />
              ))}
            </Styled.ColorList>
            <Styled.ThumbnailSelector gradient={gradient}>
              <ImgSelector onSubmit={handleSelectThumbnail}>
                {img && (
                  <Styled.ThumbnailImage
                    src={img}
                    alt="thumbnail-img"
                    layout="fill"
                  />
                )}
                <Styled.ThumbnailText>
                  <Styled.PlusIcon>
                    <PlusIcon />
                  </Styled.PlusIcon>
                  사진 업로드
                </Styled.ThumbnailText>
              </ImgSelector>
            </Styled.ThumbnailSelector>
          </Styled.Cell>
          <Styled.Cell>
            <Styled.Title>공개설정</Styled.Title>
            <Styled.VisibleLevelSelector>
              <RadioGroup
                name="visible"
                values={VISIBLE_LEVELS}
                checked={VISIBLE_LEVELS[0].value}
                onChange={handleChangeVisible}
              />
            </Styled.VisibleLevelSelector>
          </Styled.Cell>
        </Styled.Column>
        <Styled.Column>
          <Styled.Cell>
            <Styled.Title>요약글</Styled.Title>
            <Styled.Description>
              썸네일에 보이는 요약글을 공백 포함 40자까지 작성할 수 있습니다.
            </Styled.Description>
            <Styled.TextArea value={summary} onChange={handleChangeSummary} />
          </Styled.Cell>
          <Styled.Cell>
            <Styled.Title>Tag</Styled.Title>
            <Styled.Description>띄어쓰기를 통해 구분</Styled.Description>
            <TagInput onChange={handleChangeTags} />
          </Styled.Cell>
          <Styled.ButtonContainer>
            <Button variant="third" bold onClick={onClose}>
              취소
            </Button>
            <Button type="submit" variant="primary" bold>
              등록
            </Button>
          </Styled.ButtonContainer>
        </Styled.Column>
      </Styled.Form>
    </Modal>
  );
}
