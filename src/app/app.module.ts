import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectComponent } from "./projects/project/project.component";
import { CertificatesComponent } from "./certificates/certificates.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RouterModule, Routes } from "@angular/router";
import { IntroductionComponent } from "./home/introduction/introduction.component";
import { SkillsComponent } from "./home/skills/skills.component";
import { FooterComponent } from "./footer/footer.component";
import { SociallinksComponent } from "./home/introduction/sociallinks/sociallinks.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  // { path: 'certificates', component: CertificatesComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectComponent,
    CertificatesComponent,
    HomeComponent,
    AboutComponent,
    IntroductionComponent,
    SkillsComponent,
    FooterComponent,
    SociallinksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
