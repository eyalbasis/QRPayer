
namespace QRPayer.Default {
    export interface TipsRow {
        Id?: number;
        Date?: string;
        WaiterId?: number;
        Value?: number;
        WaiterUserId?: number;
        WaiterPersonId?: number;
    }

    export namespace TipsRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Tips';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Id;
            export declare const Date;
            export declare const WaiterId;
            export declare const Value;
            export declare const WaiterUserId;
            export declare const WaiterPersonId;
        }

        [
            'Id',
            'Date',
            'WaiterId',
            'Value',
            'WaiterUserId',
            'WaiterPersonId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}