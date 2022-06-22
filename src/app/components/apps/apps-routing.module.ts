import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'calendar', data: { breadcrumb: 'Calendar' }, loadChildren: () => import('./calendar/apps.calendar.module').then(m => m.AppsCalendarModule) },
        { path: 'tasklist', data: { breadcrumb: 'Task List' }, loadChildren: () => import('./tasklist/apps.tasklist.module').then(m => m.AppsTaskListModule) },
        { path: 'chat', data: { breadcrumb: 'Chat' }, loadChildren: () => import('./chat/apps.chat.module').then(m => m.AppsChatModule) },
        { path: 'file-managament', data: { breadcrumb: 'File Management' }, loadChildren: () => import('./filemanagament/apps.filemanagament.module').then(m => m.AppsFileManagamentModule) },
        { path: 'mail', data: { breadcrumb: 'Mail' }, loadChildren: () => import('./mail/apps.mail.module').then(m => m.AppsMailModule) },
        { path: 'kanban', data: { breadcrumb: 'Kanban' }, loadChildren: () => import('./kanban/apps.kanban.module').then(m => m.AppsKanbanModule) }
    ])],
    exports: [RouterModule]
})
export class AppsRoutingModule { }
