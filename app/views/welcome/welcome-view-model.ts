import { Observable } from '@nativescript/core';
import { Frame } from '@nativescript/core';

export class WelcomeViewModel extends Observable {
    constructor() {
        super();
    }

    onGetStarted() {
        Frame.topmost().navigate({
            moduleName: "views/onboarding/onboarding-page",
            clearHistory: true
        });
    }

    onLogin() {
        Frame.topmost().navigate({
            moduleName: "views/auth/login-page"
        });
    }
}