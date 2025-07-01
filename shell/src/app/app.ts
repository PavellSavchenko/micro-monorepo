import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'shell';
  routes = ['', 'remote1', 'remote2'];
  constructor(private router: Router, private route: ActivatedRoute) {}

  get selectedIndex(): number {
    const childRoute = this.route.firstChild?.snapshot.url[0]?.path;
    return this.routes.indexOf(childRoute || 'first');
  }

  onTabChange(index: number) {
    const selectedPath = this.routes[index];
    this.router.navigate([selectedPath], { relativeTo: this.route });
  }
}
