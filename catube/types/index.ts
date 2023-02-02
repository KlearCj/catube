export enum QueryKeys {
  me = "me",
  videos = "videos",
}

export interface Me {
  _id: string;
  email: string;
  username: string;
}

export interface Videos {
  _id: string;
  owner: string;
  published: boolean;
  videoId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  extension: string;
  description: string;
  title: string;
}
