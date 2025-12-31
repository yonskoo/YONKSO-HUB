export interface Rating {
  id: string;
  userId: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Script {
  id: string;
  title: string;
  description: string;
  code: string;
  author: string;
  category: "Utility" | "Combat" | "Fun" | "Farming";
  tags: string[];
  ratings: Rating[];
  createdAt: string;
}
