import * as React from 'react';
import StoreService from '../../services/StoreService';

interface Props {
    sidebarCollapse?: boolean;
    callback?: (type: string, data: any) => void;
}

interface State {
}

export class AppHeader extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (<div className='app-header border-b'>
            <div className='app-header-menus'>
                <div className='app-header-menus-left ps-3'>
                    <div className='d-flex align-items-center'>
                        <i className={`bi-17 ${this.props.sidebarCollapse ? 'bi-toggle-off' : 'bi-toggle-on'} cursor-pointer`} onClick={(e) => this.props.callback ? this.props.callback("toggleSidebar", null) : null}></i>
                        <input type="text" className="form-control ms-3" placeholder="Search..." />
                    </div>
                </div>
                <div className='app-header-menus-right pe-3 ps-3'>
                    <div className='user-block d-flex align-items-center'>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className='bi-12 bi-person-circle me-2'></i>
                                Hello, Bob
                            </a>
                            <ul className="dropdown-menu">
                                <div className='user-name-block'>
                                    <span>Signed in as</span> <b className='ms-1'>Bob Smith</b>
                                </div>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Help</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li className='mb-2'><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}