import * as React from 'react';

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
        link: "",
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
                link: "",
                srno: 1,
            },
            {
                name: "Add Product",
                icon: null,
                link: "",
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

    render() {
        return (
            <div className={`app-sidebar border-r ${this.props.sidebarCollapse ? 'd-none' : ''}`}>
                <div className='app-brand border-b p-3'>Brand</div>
                <div className="sidebar-menu-list accordion accordion-flush">
                    {
                        this.state.menus ?
                            this.state.menus.map((menu, idx_l1) => {
                                let hasSubMenuL1 = menu.subMenu && menu.subMenu.length > 0 ? true : false
                                return (
                                    <div className="accordion-item">
                                        <h2 className="accordion-header lvl-1">
                                            <button className={`accordion-button collapsed ${!hasSubMenuL1 ? 'no-lvl' : ''}`}
                                                type="button"
                                                data-bs-toggle={`${!hasSubMenuL1 ? '' : 'collapse'}`}
                                                data-bs-target={`${!hasSubMenuL1 ? '' : 'menu-collapse-' + idx_l1 + menu.srno}`}>
                                                <i className={`bi-12 me-3 ${menu.icon}`}></i>{menu.name}
                                            </button>
                                        </h2>
                                        {
                                            hasSubMenuL1 ?
                                                <div id={'menu-collapse-' + idx_l1 + menu.srno} className="accordion-collapse collapse">
                                                    {
                                                        menu.subMenu.map((subMenu: any, idx_l2: number) => {
                                                            let hasSubMenuL2 = subMenu.subMenu && subMenu.subMenu.length > 0 ? true : false
                                                            return (
                                                                <div className="accordion-item">
                                                                    <h2 className="accordion-header lvl-2">
                                                                        <button className={`accordion-button collapsed ${!hasSubMenuL2 ? 'no-lvl' : ''}`}
                                                                            type="button"
                                                                            data-bs-toggle={`${!hasSubMenuL2 ? '' : 'collapse'}`}
                                                                            data-bs-target={`${!hasSubMenuL2 ? '' : 'sub-menu-collapse-' + menu.srno + subMenu.srno}`}>
                                                                            <i className={`bi-12 me-3 ${subMenu.icon}`}></i>{subMenu.name}
                                                                        </button>
                                                                    </h2>
                                                                    {
                                                                        hasSubMenuL2 ?
                                                                            <div id={'sub-menu-collapse-' + menu.srno + subMenu.srno} className="accordion-collapse collapse">
                                                                                {
                                                                                    subMenu.subMenu.map((subSubMenu: any, idx_l3: number) => {
                                                                                        let hasSubMenuL3 = subSubMenu.subMenu && subSubMenu.subMenu.length > 0 ? true : false
                                                                                        return (
                                                                                            <div className="accordion-item">
                                                                                                <h2 className="accordion-header lvl-3">
                                                                                                    <button className={`accordion-button collapsed no-lvl`} type="button">
                                                                                                        <i className={`bi-12 me-3 ${subSubMenu.icon}`}></i>{subSubMenu.name}
                                                                                                    </button>
                                                                                                </h2>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                            : ''
                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                : ''
                                        }
                                    </div>
                                )
                            })
                            : ''
                    }
                </div>
            </div>)
    }
}