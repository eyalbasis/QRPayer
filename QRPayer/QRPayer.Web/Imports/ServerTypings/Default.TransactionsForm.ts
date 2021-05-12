
namespace QRPayer.Default {
    export class TransactionsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Transactions';
    }

    export interface TransactionsForm {
        CustomerTableId: Serenity.IntegerEditor;
        NoOfCustomers: Serenity.IntegerEditor;
        QrCode: Serenity.StringEditor;
        DealNum: Serenity.StringEditor;
        WaiterId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        Created: Serenity.DateEditor;
        Closed: Serenity.DateEditor;
    }

    [
        ['CustomerTableId', () => Serenity.IntegerEditor],
        ['NoOfCustomers', () => Serenity.IntegerEditor],
        ['QrCode', () => Serenity.StringEditor],
        ['DealNum', () => Serenity.StringEditor],
        ['WaiterId', () => Serenity.IntegerEditor],
        ['ItemId', () => Serenity.IntegerEditor],
        ['Created', () => Serenity.DateEditor],
        ['Closed', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(TransactionsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}