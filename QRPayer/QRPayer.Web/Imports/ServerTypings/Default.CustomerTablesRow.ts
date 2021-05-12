
namespace QRPayer.Default {
    export interface CustomerTablesRow {
        Id?: number;
        Number?: number;
        Places?: number;
        Accessible?: boolean;
    }

    export namespace CustomerTablesRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.CustomerTables';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Number;
            export declare const Places;
            export declare const Accessible;
        }

        [
            'Id',
            'Number',
            'Places',
            'Accessible'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}