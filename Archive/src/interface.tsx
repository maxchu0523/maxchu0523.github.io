import { ReactNode } from "react";

export interface ITodoItem {
    id: string;
    todo: string;
    completed: boolean;
  }
  

export interface IProjectCard {
  projectName: string,
  projectDesription?: string,
  sitePath?: string,
  repositoryPath?: string,
  imagePath?: string;
  techStackIcons?: ReactNode[];
}
