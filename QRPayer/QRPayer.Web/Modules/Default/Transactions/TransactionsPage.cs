
namespace QRPayer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Transactions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionsRow))]
    public class TransactionsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Transactions/TransactionsIndex.cshtml");
        }


    }
}