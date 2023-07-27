import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SlideSideComponent } from './components/slide-side/slide-side.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SlideSideComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent]
})
export class SharedModule { }
