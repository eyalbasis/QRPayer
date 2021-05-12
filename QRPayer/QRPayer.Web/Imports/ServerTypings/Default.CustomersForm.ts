
namespace QRPayer.Default {
    export class CustomersForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customers';
    }

    export interface CustomersForm {
        ClubMember: Serenity.StringEditor;
        PersonId: Serenity.IntegerEditor;
    }

    [
        ['ClubMember', () => Serenity.StringEditor],
        ['PersonId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CustomersForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}