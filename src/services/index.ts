import {Container, Scope} from 'typescript-ioc';
import {TaskApi} from './task.api';
import {TaskService} from './task.service';
import {ProjectApi} from './project.api';
import {ProjectService} from './project.service';

export * from './project.api';
export * from './project.service';
export * from './task.api';
export * from './task.service';
export * from './stock-items.api';
export * from './stock-items-mock.service';

Container.bind(TaskApi).to(TaskService).scope(Scope.Singleton);
Container.bind(ProjectApi).to(ProjectService).scope(Scope.Singleton);
