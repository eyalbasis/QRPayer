
namespace QRPayer.Default {
    export class TransactionItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.TransactionItems';
    }

    export interface TransactionItemsForm {
        TransactionId: Serenity.IntegerEditor;
        ItemId: Serenity.IntegerEditor;
        CustomerId: Serenity.IntegerEditor;
        TotalPaid: Serenity.DecimalEditor;
    }

    [,
        ['TransactionId', () => Serenity.IntegerEditor],
        ['ItemId', () => Serenity.IntegerEditor],
        ['CustomerId', () => Serenity.IntegerEditor],
        ['TotalPaid', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(TransactionItemsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}