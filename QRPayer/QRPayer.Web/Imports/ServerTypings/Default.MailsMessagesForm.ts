
namespace QRPayer.Default {
    export class MailsMessagesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MailsMessages';
    }

    export interface MailsMessagesForm {
        Body: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        CustomerId: Serenity.IntegerEditor;
    }

    [
        ['Body', () => Serenity.StringEditor],
        ['Subject', () => Serenity.StringEditor],
        ['CustomerId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(MailsMessagesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}