
namespace QRPayer.Default {
    export class PersonsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Persons';
    }

    export interface PersonsForm {
        Name: Serenity.StringEditor;
        Birthday: Serenity.DateEditor;
        Phone: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    [
        ['Name', () => Serenity.StringEditor],
        ['Birthday', () => Serenity.DateEditor],
        ['Phone', () => Serenity.StringEditor],
        ['Address', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(PersonsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}