
namespace QRPayer.Default {
    export interface CustomersRow {
        ClubMember?: string;
        Id?: number;
        PersonId?: number;
        PersonName?: string;
        PersonBirthday?: string;
        PersonPhone?: string;
        PersonAddress?: string;
        PersonEmail?: string;
    }

    export namespace CustomersRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ClubMember';
        export const localTextPrefix = 'Default.Customers';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const ClubMember;
            export declare const Id;
            export declare const PersonId;
            export declare const PersonName;
            export declare const PersonBirthday;
            export declare const PersonPhone;
            export declare const PersonAddress;
            export declare const PersonEmail;
        }

        [
            'ClubMember',
            'Id',
            'PersonId',
            'PersonName',
            'PersonBirthday',
            'PersonPhone',
            'PersonAddress',
            'PersonEmail'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}