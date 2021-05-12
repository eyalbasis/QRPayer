
namespace QRPayer.Default {
    export interface PersonsRow {
        Name?: string;
        Birthday?: string;
        Phone?: string;
        Address?: string;
        Email?: string;
        Id?: number;
    }

    export namespace PersonsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Persons';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Name;
            export declare const Birthday;
            export declare const Phone;
            export declare const Address;
            export declare const Email;
            export declare const Id;
        }

        [
            'Name',
            'Birthday',
            'Phone',
            'Address',
            'Email',
            'Id'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}