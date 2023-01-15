import * as React from 'react';

interface Props {
    sidebarCollapse?: boolean;
    callback?: (type: string, data: any) => void;
}

interface State {}

export class AppFooter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className='app-footer border-t p-3'>App Footer</div>)
    }
}