import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    sidebarCollapse?: boolean;
    callback?: (type: string, data: any) => void;
}

interface State {
    menus: any[]
}

const GlobalMenus = [
    {
        name: "Dashboard",
        icon: "bi-bar-chart",
        link: "/dashboard",
        srno: 1
    },
    {
        name: "Inventory",
        icon: "bi-boxes",
        link: "",
        srno: 2,
        subMenu: [
            {
                name: "Products",
                icon: null,
                link: "/inventory/list",
                srno: 1,
            },
            {
                name: "Add Product",
                icon: null,
                link: "/inventory/form",
                srno: 2
            }
        ],

    }
]

export class AppSidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            menus: GlobalMenus.sort((a, b) => a.srno - b.srno)
        };
    }

    accordionItem(menu: any, lvl: number) {
        let hasSubMenu = menu.subMenu && menu.subMenu.length > 0 ? true : false;
        return (
            <div className="accordion-item">
                {
                    this.accordionHeader(menu, lvl)
                }
                {
                    hasSubMenu ? this.accordionCollapse(menu, lvl) : ''
                }
            </div>
        )
    }

    accordionHeader(menu: any, lvl: number) {
        return (
            <h2 className={"accordion-header lvl-" + lvl}>
                {
                    this.accordionButton(menu, lvl)
                }
            </h2>
        )
    }

    accordionButton(menu: any, lvl: number) {
        let hasSubMenu = menu.subMenu && menu.subMenu.length > 0 ? true : false;
        return (
            <Link
                to={menu.link && menu.link.length > 1 ? menu.link : '#'}
                className={`accordion-button collapsed ${!hasSubMenu ? 'no-lvl' : ''}`}
                data-bs-toggle={`${!hasSubMenu ? '' : 'collapse'}`}
                data-bs-target={`${!hasSubMenu ? '' : '#menu-collapse-' + lvl + menu.srno}`}
                aria-expanded="false">
                {
                    lvl > 1 && !hasSubMenu ? <i className={`bi-12 me-3 bi-link`}></i> :
                        <i className={`bi-12 me-3 ${menu.icon}`}></i>
                }
                {menu.name}
            </Link>

        )
    }

    accordionCollapse(menu: any, lvl: number) {
        return (
            <div id={'menu-collapse-' + lvl + menu.srno} className="accordion-collapse collapse">
                {
                    menu.subMenu.map((subMenu: any, sub_idx: number) => {
                        return this.accordionItem(subMenu, lvl + 1)
                    })
                }
            </div>
        )
    }


    render() {
        return (
            <div className={`app-sidebar border-r ${this.props.sidebarCollapse ? 'd-none' : ''}`}>
                <div className='app-brand border-b p-3'>Brand</div>
                <div className="sidebar-menu-list accordion accordion-flush">
                    {
                        this.state.menus ?
                            this.state.menus.map((menu, idx) => {
                                return (
                                    this.accordionItem(menu, 1)
                                )
                            })
                            : ''
                    }
                </div>
            </div>)
    }
}