import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Drive } from "./drive/drive";
import { Kanban } from "./kanban/kanban";
import { Notes } from "./notes/notes";
import { Profile } from "./profile/profile";
import { Todo } from "./todo/todo";
import { Users } from "./users/users";
import { Pages } from "./pages";
import { Settings } from "./settings/settings";

export const pages_routes: Routes = [
    { path: 'dashboard', component: Dashboard },
    { path: 'drive', component: Drive },
    { path: 'kanban', component: Kanban },
    { path: 'notes', component: Notes },
    { path: 'profile', component: Profile },
    { path: 'pages', component: Pages },
    { path: 'settings', component: Settings },
    { path: 'todo', component: Todo },
    { path: 'users', component: Users }
]