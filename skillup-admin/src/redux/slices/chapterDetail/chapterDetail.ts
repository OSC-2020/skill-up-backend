interface IChapterInfo {
  id?: string;
  title: string;
  completedByCount?: number;
}

interface IChapterDetail extends IChapterInfo {}
export type { IChapterInfo, IChapterDetail };
