/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Project } from './projects.model';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }

  createProject(project: Omit<Project, 'id'>): Project {
    const newProject = { id: (Math.random() + 1).toString(36).substring(2), ...project };
    this.projects.push(newProject);
    return newProject;
  }

  updateProject(id: string, updatedProject: Partial<Project>): Project {
    const projectIndex = this.projects.findIndex(project => project.id === id);
    if (projectIndex === -1) {
      throw new Error('Project not found');
    }
    const updated = { ...this.projects[projectIndex], ...updatedProject };
    this.projects[projectIndex] = updated;
    return updated;
  }

  deleteProject(id: string): void {
    this.projects = this.projects.filter(project => project.id !== id);
  }

  toggleStatus(id: string): Project {
    const project = this.projects.find(p => p.id === id);
    if (!project) {
      throw new Error('Project not found');
    }
    project.status = !project.status;
    return project;
  }
}
