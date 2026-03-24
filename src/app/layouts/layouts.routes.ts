import { Routes } from "@angular/router";
import { Menu } from "./menu/menu";
import { Header } from "./header/header";
import { Layouts } from "./layouts";

export const layouts_routes : Routes = [
    { path:'header', component: Header },
    { path:'menu', component: Menu },
    { path:'layouts', component: Layouts }
]