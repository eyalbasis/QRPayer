
namespace QRPayer.Default {
    export class WaitersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Waiters';
    }

    export interface WaitersForm {
        UserId: Serenity.IntegerEditor;
        PersonId: Serenity.IntegerEditor;
    }

    [
        ['UserId', () => Serenity.IntegerEditor],
        ['PersonId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(WaitersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}