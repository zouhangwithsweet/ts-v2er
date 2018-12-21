export interface Member{
  avatar_large: string;
  avatar_mini: string;
  avatar_normal: string;
  bio: string;
  btc: string;
  created: number;
  github: string;
  id: number;
  location: string;
  psn: string;
  tagline: string;
  twitter: string;
  url: string;
  username: string;
  website: string;
}

export type MemberType = {
  avatar_large: string;
  avatar_mini: string;
  avatar_normal: string;
  bio: string;
  btc: string;
  created: number;
  github: string;
  id: number;
  location: string;
  psn: string;
  tagline: string;
  twitter: string;
  url: string;
  username: string;
  website: string;
}

export interface Node {
  avatar_large: string;
  avatar_mini: string;
  avatar_normal: string;
  footer: string;
  header: string;
  id: number;
  name: string;
  parent_node_name: string;
  root: boolean;
  stars: number;
  title: string;
  title_alternative: string;
  topics: number;
  url: string;
}

export type Nodetype = {
  avatar_large: string;
  avatar_mini: string;
  avatar_normal: string;
  footer: string;
  header: string;
  id: number;
  name: string;
  parent_node_name: string;
  root: boolean;
  stars: number;
  title: string;
  title_alternative: string;
  topics: number;
  url: string;
}

export interface Iitem {
  content: string;
  content_rendered: string;
  created: number;
  id: number;
  last_modfied: number;
  last_reply_by: string;
  last_touched: number;
  member: Member;
  node: Node;
  replies: number;
  title: string;
  url: string;
}
