
namespace QRPayer.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Threading.Tasks;
    using System.Web.Mvc;

    [RoutePrefix("Default/Transactions"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionsRow))]
    public class TransactionsController : Controller
    {
        public ActionResult Index()
       {
            return View("~/Modules/Default/Transactions/TransactionsIndex.cshtml");
        }

    /*    
        public async Task<ActionResult> Paying()
        {
            try
            {
                //QRPayer.Default.Pages.TransactionsControlle
                await QRPayer.Default.Pages.TransactionsController();
            }
            catch
            return View("~/Modules/Default/Transactions/paying.cshtml");
        }
    */
    }
}