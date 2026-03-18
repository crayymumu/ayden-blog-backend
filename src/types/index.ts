export type Employee = {
  id: number;
  createdAt: string;
  updatedAt: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  role: string;
  email: string;
  address: string;
  phone: string;
  birthdate: string;
  links: string[];
  availableAnnualLeaveDays: number;
  teamId: number;
};

export type TimeOff = {
  id: number;
  createdAt: string;
  updatedAt: string;
  timeOffType: TimeOffType;
  startsAt: string;
  endsAt: string;
  notes: string | null;
  status: TimeOffStatus;
  employeeId: number;
};

export enum Role {
  MANAGER = "Manager",
  EMPLOYEE = "Employee",
}

export enum TimeOffStatus {
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
}

export enum TimeOffType {
  ANNUAL = "Annual",
  SICK = "Sick",
  CASUAL = "Casual",
}

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  nickname: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Blog = {
  id: number;
  title: string;
  abstract: string;
  readCount: number;
  score: number;
  source: number;
  level: number;
  password: string | null;
  author: number;
  updateTime: string;
  createTime: string;
  flag: number;
  mdContent: string;
  content: string;
  categories?: Category[];
  tags?: Tag[];
};

export type Category = {
  id: number;
  name: string;
  time: string;
  description: string;
  flag: number;
};

export type Tag = {
  id: number;
  name: string;
  description: string;
  flag: number;
  time: string;
};

export type BlogCategory = {
  id: number;
  blogId: number;
  categoryId: number;
};

export type BlogTag = {
  id: number;
  blogId: number;
  tagId: number;
};
