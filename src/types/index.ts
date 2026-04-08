export interface Employee {
  id: number
  createdAt: string
  updatedAt: string
  avatarUrl: string
  firstName: string
  lastName: string
  jobTitle: string
  role: string
  email: string
  address: string
  phone: string
  birthdate: string
  links: string[]
  availableAnnualLeaveDays: number
  teamId: number
}

export interface TimeOff {
  id: number
  createdAt: string
  updatedAt: string
  timeOffType: TimeOffType
  startsAt: string
  endsAt: string
  notes: string | null
  status: TimeOffStatus
  employeeId: number
}

export enum Role {
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
}

export enum TimeOffStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

export enum TimeOffType {
  ANNUAL = 'Annual',
  SICK = 'Sick',
  CASUAL = 'Casual',
}

export interface AuthUser {
  id: string
  name: string
  email: string
  image: string | null
  nickname: string | null
  createdAt: string
  updatedAt: string
}

export interface Blog {
  id: number
  title: string
  abstract: string
  readCount: number
  score: number
  source: number
  level: number
  password: string | null
  author: number
  updateTime: string
  createTime: string
  flag: number
  mdContent: string
  content: string
  categories?: Category[]
  tags?: Tag[]
}

export interface Category {
  id: number
  name: string
  time: string
  description: string
  flag: number
}

export interface Tag {
  id: number
  name: string
  description: string
  flag: number
  time: string
}

export interface BlogCategory {
  id: number
  blogId: number
  categoryId: number
}

export interface BlogTag {
  id: number
  blogId: number
  tagId: number
}

export interface PhotoImage {
  id: string
  imageName: string | null
  url: string | null
  previewUrl: string | null
  videoUrl: string | null
  originalKey: string | null
  previewKey: string | null
  videoKey: string | null
  blurhash: string | null
  exif: unknown
  labels: unknown
  width: number
  height: number
  lon: string | null
  lat: string | null
  title: string | null
  detail: string | null
  type: number
  show: number
  showOnMainpage: number
  featured: number
  sort: number
  createdAt: string
  updatedAt: string | null
  del: number
}

export interface PhotoAlbum {
  id: string
  name: string
  albumValue: string
  detail: string | null
  theme: string
  show: number
  sort: number
  randomShow: number
  license: string | null
  createdAt: string
  updatedAt: string | null
  del: number
  imageSorting: number
  cover: string | null
}

export interface PhotoTag {
  id: string
  name: string
  category: string | null
  parentId: string | null
  detail: string | null
  createdAt: string
  updatedAt: string | null
  children?: PhotoTag[]
}

export interface PhotoConfig {
  id: string
  configKey: string
  configValue: string | null
  detail: string | null
}

export interface PhotoAnalyticsSummary {
  total: number
  byPageType: Record<string, number>
  bySource: Record<string, number>
  dailyVisits: { date: string, count: number }[]
}
