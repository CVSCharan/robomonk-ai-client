export interface K12CoursesDataItem {
  id: number;
  title: string;
  desc: string;
  imgSrc: string;
}

export interface K12EducatorsDataItem {
  id: number;
  name: string;
  desc: string;
  imgSrc: string;
}

export interface K12StudentTestimonialsDataItem {
  id: number;
  name: string;
  desc: string;
  comment: string;
}

export interface K12SchoolClientsDataItem {
  id: number;
  name: string;
  imgSrc: string;
}

export interface VisibilityState {
  [key: string]: boolean;
}
