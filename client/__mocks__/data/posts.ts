import Post from '@/types/Post';
import { ADMIN, USER } from '@mocks/data/users';
import { COMMENT, COMMENT2 } from '@mocks/data/comments';

export const POST_CONTENT = [
  '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)',
  '',
  '# Awesome Editor!',
  '',
  'It has been _released as opensource in 2018_ and has ~~continually~~ evolved to **receive 10k GitHub ⭐️ Stars**.',
  '',
  '## Create Instance',
  '',
  'You can create an instance with the following code and use `getHtml()` and `getMarkdown()` of the [Editor](https://github.com/nhn/tui.editor).',
  '',
  '```js',
  'const editor = new Editor(options);',
  '```',
  '',
  '> See the table below for default options',
  '> > More API information can be found in the document',
  '',
  '| name | type | description |',
  '| --- | --- | --- |',
  '| el | `HTMLElement` | container element |',
  '',
  '## Features',
  '',
  '* CommonMark + GFM Specifications',
  '   * Live Preview',
  '   * Scroll Sync',
  '   * Auto Indent',
  '   * Syntax Highlight',
  '        1. Markdown',
  '        2. Preview',
  '',
  '## Support Wrappers',
  '',
  '> * Wrappers',
  '>    1. [x] React',
  '>    2. [x] Vue',
  '>    3. [ ] Ember',
].join('\n');

export const POST: Post = {
  id: 0,
  user: USER,
  title: '여덟글자하이용',
  content: POST_CONTENT,
  thumbnail: {
    type: 'gradation',
    value: { start: '#D45438', end: '#FEA768' },
  },
  summary:
    '요약글 미입력시 본문 앞 내용을 불러와서 여기에 3줄까지 표시됩니다. 이후는 ‘...’ 말 줄임표를 통해 나타납니다.(요약글 동일)',
  likes: 0,
  comments: [COMMENT, COMMENT2],
  createdAt: new Date('2021.12.15'),
  tags: ['tag', 'tag', 'tag', 'tag', 'tag', 'tag', 'tag', 'tag', 'tag'],
  visibleLevel: 'public',
};

export const ADMIN_POST: Post = {
  id: 1,
  user: ADMIN,
  title: '뭔가 공지를 하는 글입니다.',
  content: POST_CONTENT,
  thumbnail: {
    type: 'gradation',
    value: { start: '#000000', end: '#000000' },
  },
  summary:
    '요약글 미입력시 본문 앞 내용을 불러와서 여기에 3줄까지 표시됩니다. 이후는 ‘...’ 말 줄임표를 통해 나타납니다.(요약글 동일)',
  likes: 1,
  comments: [COMMENT, COMMENT2],
  createdAt: new Date('2021.12.15'),
  tags: ['tag', 'tag'],
  visibleLevel: 'public',
};

export const POSTS: Post[] = [
  POST,
  { ...POST, id: 2 },
  { ...POST, id: 3 },
  { ...POST, id: 4 },
  { ...POST, id: 5 },
  { ...POST, id: 6 },
  { ...POST, id: 7 },
  { ...POST, id: 8 },
  { ...POST, id: 9 },
  { ...POST, id: 10 },
];
