interface IChapterInfo {
  id?: string;
  title: string;
  completedByCount?: number;
}

interface IChapterDetail extends IChapterInfo {
  pos: number;
}
export type { IChapterInfo, IChapterDetail };
