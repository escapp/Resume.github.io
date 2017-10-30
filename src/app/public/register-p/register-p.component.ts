import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-register-p',
    templateUrl: 'register-p.component.html',
    styleUrls: ['register-p.component.css']
})

export class RegisterPComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/loginp']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
