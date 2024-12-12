import { EventData, Page } from '@nativescript/core';
import { WelcomeViewModel } from './welcome-view-model';

export function onNavigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new WelcomeViewModel();
}