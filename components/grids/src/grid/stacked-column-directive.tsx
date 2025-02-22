import { ComplexBase } from '@syncfusion/ej2-react-base';
import { StackedColumnModel } from '@syncfusion/ej2-grids';

export interface StackedColumnDirTypecast {
    template?: string | Function | any;
    headerTemplate?: string | Function | any;
    commandsTemplate?: string | Function | any;
    filterItemTemplate?: string | Function | any;
    editTemplate?: string | Function | any;
    filterTemplate?: string | Function | any;
}

export class StackedColumnDirective extends ComplexBase<StackedColumnModel| StackedColumnDirTypecast & { children?: React.ReactNode }, StackedColumnModel| StackedColumnDirTypecast> {
    public static moduleName: string = 'stackedColumn';
    public static complexTemplate: Object = {'filterItemTemplate': 'filter.itemTemplate'};
}

export class StackedColumnsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'columns';
    public static moduleName: string = 'stackedColumns';
}
