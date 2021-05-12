namespace QRPayer.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'QRPayer.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

