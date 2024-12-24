export interface articleType {
  name: string;
  cover: string;
  tag: string;
  content: string; // 文章内容
  authorId: string;
  status: number; // 0:草稿 1:已发布
}
export interface articleParams {
  page_index?: number;
  page_size?: number;
}
