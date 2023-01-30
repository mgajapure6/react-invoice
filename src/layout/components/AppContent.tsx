import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Dashboard } from '../../pages/dashboard/Dashboard';
import { ProductForm } from '../../pages/inventory/ProductForm';
import { ProductList } from '../../pages/inventory/ProductList';
import { AppFooter } from './AppFooter';

interface Props {
    sidebarCollapse?: boolean;
    callback?: (type: string, data: any) => void;
}

interface State { }


export class AppContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className='app-content p-3'>
            <Outlet />
        </div>)
    }
}