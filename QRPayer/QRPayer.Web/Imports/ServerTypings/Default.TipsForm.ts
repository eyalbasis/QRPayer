
namespace QRPayer.Default {
    export class TipsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Tips';
    }

    export interface TipsForm {
        Date: Serenity.DateEditor;
        WaiterId: Serenity.IntegerEditor;
        Value: Serenity.DecimalEditor;
    }

    [,
        ['Date', () => Serenity.DateEditor],
        ['WaiterId', () => Serenity.IntegerEditor],
        ['Value', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(TipsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}