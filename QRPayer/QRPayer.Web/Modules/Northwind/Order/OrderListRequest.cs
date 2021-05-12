using Serenity.Services;

namespace QRPayer.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}