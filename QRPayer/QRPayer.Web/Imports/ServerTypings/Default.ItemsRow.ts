
namespace QRPayer.Default {
    export interface ItemsRow {
        Name?: string;
        Price?: number;
        Id?: number;
    }

    export namespace ItemsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Items';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Name;
            export declare const Price;
            export declare const Id;
        }

        [
            'Name',
            'Price',
            'Id'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}