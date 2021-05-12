
namespace QRPayer.Default {
    export interface TransactionsRow {
        CustomerTableId?: number;
        NoOfCustomers?: number;
        QrCode?: string;
        DealNum?: string;
        WaiterId?: number;
        ItemId?: number;
        Id?: number;
        Created?: string;
        Closed?: string;
        CustomerTableNumber?: number;
        CustomerTablePlaces?: number;
        CustomerTableAccessible?: boolean;
        WaiterUserId?: number;
        WaiterPersonId?: number;
        ItemName?: string;
        ItemPrice?: number;
    }

    export namespace TransactionsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'QrCode';
        export const localTextPrefix = 'Default.Transactions';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CustomerTableId;
            export declare const NoOfCustomers;
            export declare const QrCode;
            export declare const DealNum;
            export declare const WaiterId;
            export declare const ItemId;
            export declare const Id;
            export declare const Created;
            export declare const Closed;
            export declare const CustomerTableNumber;
            export declare const CustomerTablePlaces;
            export declare const CustomerTableAccessible;
            export declare const WaiterUserId;
            export declare const WaiterPersonId;
            export declare const ItemName;
            export declare const ItemPrice;
        }

        [
            'CustomerTableId',
            'NoOfCustomers',
            'QrCode',
            'DealNum',
            'WaiterId',
            'ItemId',
            'Id',
            'Created',
            'Closed',
            'CustomerTableNumber',
            'CustomerTablePlaces',
            'CustomerTableAccessible',
            'WaiterUserId',
            'WaiterPersonId',
            'ItemName',
            'ItemPrice'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}