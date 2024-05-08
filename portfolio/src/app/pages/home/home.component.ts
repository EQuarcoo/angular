import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/layouts/header/header.component";
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { FeaturedWorksComponent } from '../../shared/components/featured-works/featured-works.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ 
                HeaderComponent,
                AboutComponent, 
                FeaturedWorksComponent,
                ContactUsComponent,
                FooterComponent, 
                RouterModule
            ]
})
export class HomeComponent {

}
