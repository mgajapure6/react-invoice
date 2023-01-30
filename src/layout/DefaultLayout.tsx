import * as React from 'react';
import { AppContent } from './components/AppContent';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { AppSidebar } from './components/AppSidebar';
import StoreService from '../services/StoreService';

interface Props { }

interface State {
    sidebarCollapse: boolean;
}

export class DefaultLayout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        StoreService.add("sidebarCollapse", false)
        this.state = {
            sidebarCollapse: false
        };
        this.handleChildCallbacks = this.handleChildCallbacks.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    handleChildCallbacks(type: string, data: any) {
        switch (type) {
            case "toggleSidebar":
                this.toggleSidebar();
                break;
        }
    }

    toggleSidebar() {

        let sidebarCollapse = !JSON.parse(StoreService.get("sidebarCollapse"));
        this.setState({
            sidebarCollapse: sidebarCollapse
        }, () => {
            StoreService.add("sidebarCollapse", sidebarCollapse);
        })
    }

    render() {
        return (
            <div className='app-container container-fluid p-0 m-0'>
                <AppSidebar sidebarCollapse={this.state.sidebarCollapse} callback={this.handleChildCallbacks} />
                <div className='app-header-content-footer-wrapper'>
                    <AppHeader sidebarCollapse={this.state.sidebarCollapse} callback={this.handleChildCallbacks} />
                    <AppContent sidebarCollapse={this.state.sidebarCollapse} callback={this.handleChildCallbacks} />
                    <AppFooter sidebarCollapse={this.state.sidebarCollapse} callback={this.handleChildCallbacks} />
                </div>
                <div className={!this.state.sidebarCollapse ? 'app-backdrop' : ''} onClick={(e)=>this.toggleSidebar()}></div>
            </div>)
    }
}