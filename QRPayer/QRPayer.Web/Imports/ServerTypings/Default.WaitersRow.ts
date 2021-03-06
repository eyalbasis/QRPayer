
namespace QRPayer.Default {
    export interface WaitersRow {
        UserId?: number;
        Id?: number;
        PersonId?: number;
        PersonName?: string;
        PersonBirthday?: string;
        PersonPhone?: string;
        PersonAddress?: string;
        PersonEmail?: string;
    }

    export namespace WaitersRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Default.Waiters';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const UserId;
            export declare const Id;
            export declare const PersonId;
            export declare const PersonName;
            export declare const PersonBirthday;
            export declare const PersonPhone;
            export declare const PersonAddress;
            export declare const PersonEmail;
        }

        [
            'UserId',
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