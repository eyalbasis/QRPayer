
namespace QRPayer.Default {
    export interface TransactionItemsRow {
        Id?: number;
        TransactionId?: number;
        ItemId?: number;
        CustomerId?: number;
        TotalPaid?: number;
        TransactionCustomerTableId?: number;
        TransactionNoOfCustomers?: number;
        TransactionQrCode?: string;
        TransactionDealNum?: string;
        TransactionWaiterId?: number;
        TransactionItemId?: number;
        TransactionCreated?: string;
        TransactionClosed?: string;
        ItemName?: string;
        ItemPrice?: number;
        CustomerClubMember?: string;
        CustomerPersonId?: number;
    }

    export namespace TransactionItemsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.TransactionItems';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const TransactionId;
            export declare const ItemId;
            export declare const CustomerId;
            export declare const TotalPaid;
            export declare const TransactionCustomerTableId;
            export declare const TransactionNoOfCustomers;
            export declare const TransactionQrCode;
            export declare const TransactionDealNum;
            export declare const TransactionWaiterId;
            export declare const TransactionItemId;
            export declare const TransactionCreated;
            export declare const TransactionClosed;
            export declare const ItemName;
            export declare const ItemPrice;
            export declare const CustomerClubMember;
            export declare const CustomerPersonId;
        }

        [
            'Id',
            'TransactionId',
            'ItemId',
            'CustomerId',
            'TotalPaid',
            'TransactionCustomerTableId',
            'TransactionNoOfCustomers',
            'TransactionQrCode',
            'TransactionDealNum',
            'TransactionWaiterId',
            'TransactionItemId',
            'TransactionCreated',
            'TransactionClosed',
            'ItemName',
            'ItemPrice',
            'CustomerClubMember',
            'CustomerPersonId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}