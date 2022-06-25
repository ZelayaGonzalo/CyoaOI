import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { TypeOfWorldComponent } from './sections/type-of-world/type-of-world.component';
import { NavBarComponent } from './sections/nav-bar/nav-bar.component';
import { HelpWindowComponent } from './sections/help-window/help-window.component';
import { WorldSettingComponent } from './sections/world-setting/world-setting.component';
import { RoleComponent } from './sections/role/role.component';
import { MirrorComponent } from './sections/components/mirror/mirror.component';
import { PerksDrawbacksComponent } from './sections/perks-drawbacks/perks-drawbacks.component';
import { PerkMirrorComponent } from './sections/components/perk-mirror/perk-mirror.component';
import { EndingComponent } from './sections/ending/ending.component';
import { EndingMirrorComponent } from './sections/components/ending-mirror/ending-mirror.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TypeOfWorldComponent,
    NavBarComponent,
    HelpWindowComponent,
    WorldSettingComponent,
    RoleComponent,
    MirrorComponent,
    PerksDrawbacksComponent,
    PerkMirrorComponent,
    EndingComponent,
    EndingMirrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
