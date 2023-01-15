import * as React from 'react';

interface Props {
    sidebarCollapse?: boolean;
    callback?: (type: string, data: any) => void;
}

interface State { }

export class AppSidebar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className={`app-sidebar border-r ${this.props.sidebarCollapse ? 'd-none' : ''}`}>
            <div className='app-brand border-b p-3'>Brand</div>
            <div className="sidebar-menu-list accordion accordion-flush">
                <div className="accordion-item">
                    <h2 className="accordion-header lvl-1" id="flush-headingOne">
                        <button className="accordion-button no-lvl" type="button">
                            <i className='bi-12 bi-bar-chart me-3'></i>Dashboard
                        </button>
                    </h2>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header lvl-1" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                        <i className='bi-12 bi-boxes me-3'></i>Inventory
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse">
                        <div className="accordion-item">
                            <h2 className="accordion-header lvl-2" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOneOne">
                                    Item 1
                                </button>
                            </h2>
                            <div id="flush-collapseOneOne" className="accordion-collapse collapse">
                                <div className="accordion-body lvl-3">
                                    A Item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                        <i className='bi-12 bi-cart-check me-3'></i>Sales
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwoTwo">
                                    Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseTwoTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    A Item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                        <i className='bi-12 bi-cart-plus me-3'></i>Purchase
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThreeThree">
                                    Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseThreeThree" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    A Item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                        <i className='bi-12 bi-clipboard2-data me-3'></i>Reports
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourFour">
                                    Item 1
                                </button>
                            </h2>
                            <div id="flush-collapseFourFour" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    A Item
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}