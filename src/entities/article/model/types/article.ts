export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export type ArticleBlockType = 'TEXT' | 'CODE' | 'IMAGE';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleText extends ArticleBlockBase {
  type: 'TEXT';
  title?: string;
  paragraphs: string[];
}

export interface ArticleCode extends ArticleBlockBase {
  type: 'CODE';
  code: string;
}

export interface ArticleImage extends ArticleBlockBase {
  type: 'IMAGE';
  title: string;
  src: string;
}

export type ArticleBlock = ArticleText | ArticleCode | ArticleImage;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
  data?: Article;
  isLoading: boolean;
  error?: string;
}
