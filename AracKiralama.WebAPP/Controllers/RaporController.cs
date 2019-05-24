using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AracKiralama.WebAPP.Models;

namespace AracKiralama.WebAPP.Controllers
{
    public class RaporController : Controller
    {
        AracKiralamaEntities db=new AracKiralamaEntities();
        // GET: Rapor
        public ActionResult Index()
        {
            return View();

        }
    }
}