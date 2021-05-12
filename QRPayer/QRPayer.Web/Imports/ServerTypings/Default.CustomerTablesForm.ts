
namespace QRPayer.Default {
    export class CustomerTablesForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CustomerTables';
    }

    export interface CustomerTablesForm {
        Number: Serenity.IntegerEditor;
        Places: Serenity.IntegerEditor;
        Accessible: Serenity.BooleanEditor;
    }

    [,
        ['Number', () => Serenity.IntegerEditor],
        ['Places', () => Serenity.IntegerEditor],
        ['Accessible', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CustomerTablesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}