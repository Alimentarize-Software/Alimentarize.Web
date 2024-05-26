import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
})
export class BreadcrumbComponent implements OnInit {
  tempState: Array<any> = [];
  breadcrumbs: Array<any> = [];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      // note, we don't use event
      if (event instanceof NavigationEnd || event instanceof Scroll) {
        this.breadcrumbs = [];
        this.tempState = [];
        let currentRoute: any = this.route.root;
        let url = '';

        do {
          const childrenRoutes = currentRoute.children;

          currentRoute = null;
          childrenRoutes.forEach((routes: any) => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              const segments = routeSnapshot.url.map((segment: any) => segment.path);
              if (segments.length > 0) {
                url += '/' + segments.join('/');
              }
              if (routes.snapshot.data.breadcrumb !== undefined) {
                let status = true;
                if (routes.snapshot.data.status !== undefined) {
                  status = routes.snapshot.data.status;
                }
                if (!this.tempState.includes(routes.snapshot.data.breadcrumb)) {
                  this.tempState.push(routes.snapshot.data.breadcrumb);
                  this.breadcrumbs.push({
                    label: routes.snapshot.data.breadcrumb,
                    status: status,
                    url: url,
                  });
                }
              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);
        // console.log(this.breadcrumbs)

      }
    });
  }
}
