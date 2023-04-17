import { memo } from 'react';
import { Article, ArticleList } from 'entities/article';

import styles from './articles-page.module.scss';

const article = {
  id: '1',
  user: {
    id: '1',
    username: 'mvsman',
    avatar:
      'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
  },
  title: 'JavaScript. Работа с буфером, Ctrl+C Ctrl+V',
  subtitle:
    'Как копировать в буфер картинки. Какие типы данных можно класть в буфер. Поддержка кастомных типов. Как сделать свои кнопки копировать/вставить.',
  img: 'https://habrastorage.org/r/w1560/webt/in/r4/qu/inr4quketif7lohmnby_zln2lt0.png',
  views: 699,
  createdAt: '27.03.2023',
  type: ['IT', 'ECONOMICS', 'SCIENCE'],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок блока',
      paragraphs: [
        "document.execCommand('copy') не работает. Это API устарело и не работает. Не пытайтесь с его помощью обойти ограничения других API.",
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: "document.addEventListener('copy', evt => {\nevt.preventDefault();\nevt.clipboardData.setData('text/plain', 'text to clipboard');\n});",
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок блока',
      paragraphs: [
        'В этом варианте нет возможности сделать свою кнопку “копировать”, пользователь должен нажать Ctrl+C.',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://habrastorage.org/webt/9c/sb/js/9csbjsbj7g6vnktjmojz2ttifu0.png',
      title: 'Просто картинка :)',
    },
    {
      id: '3',
      type: 'CODE',
      code: "btn.addEventListener('click', async _ => \nawait navigator.clipboard.writeText('text to clipboard')\n);",
    },
  ],
} as Article;

const ArticlesPage = () => (
  <div>
    <ArticleList
      articles={new Array(16)
        .fill(0)
        .map((_, index) => ({ ...article, id: String(index) }))}
    />
  </div>
);

export default memo(ArticlesPage);
