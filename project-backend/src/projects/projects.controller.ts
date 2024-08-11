/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './projects.model';

@Controller('api/data')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAllProjects() {
    return this.projectsService.getAllProjects();
  }

  @Post()
  createProject(@Body() project: Omit<Project, 'id'>) {
    return this.projectsService.createProject(project);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() updatedProject: Partial<Project>) {
    return this.projectsService.updateProject(id, updatedProject);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    this.projectsService.deleteProject(id);
  }

  @Post('toggle/:id')
  toggleStatus(@Param('id') id: string) {
    return this.projectsService.toggleStatus(id);
  }
}
