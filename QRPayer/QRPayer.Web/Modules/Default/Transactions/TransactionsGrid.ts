
namespace QRPayer.Default {

    @Serenity.Decorators.registerClass()
    export class TransactionsGrid extends Serenity.EntityGrid<TransactionsRow, any> {
        protected getColumnsKey() { return 'Default.Transactions'; }
        protected getDialogType() { return TransactionsDialog; }
        protected getIdProperty() { return TransactionsRow.idProperty; }
        protected getInsertPermission() { return TransactionsRow.insertPermission; }
        protected getLocalTextPrefix() { return TransactionsRow.localTextPrefix; }
        protected getService() { return TransactionsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}