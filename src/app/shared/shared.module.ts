import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideComponent } from './components/slide/slide.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SlideComponent,],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, SlideComponent]
})
export class SharedModule { }
