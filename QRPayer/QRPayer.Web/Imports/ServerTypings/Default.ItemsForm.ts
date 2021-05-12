
namespace QRPayer.Default {
    export class ItemsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Items';
    }

    export interface ItemsForm {
        Name: Serenity.StringEditor;
        Price: Serenity.DecimalEditor;
    }

    [
        ['Name', () => Serenity.StringEditor],
        ['Price', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ItemsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}