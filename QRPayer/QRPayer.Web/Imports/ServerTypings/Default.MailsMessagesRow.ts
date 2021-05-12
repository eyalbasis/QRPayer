
namespace QRPayer.Default {
    export interface MailsMessagesRow {
        Body?: string;
        Subject?: string;
        Id?: number;
        CustomerId?: number;
        CustomerClubMember?: string;
        CustomerPersonId?: number;
    }

    export namespace MailsMessagesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Body';
        export const localTextPrefix = 'Default.MailsMessages';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const Body;
            export declare const Subject;
            export declare const Id;
            export declare const CustomerId;
            export declare const CustomerClubMember;
            export declare const CustomerPersonId;
        }

        [
            'Body',
            'Subject',
            'Id',
            'CustomerId',
            'CustomerClubMember',
            'CustomerPersonId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}