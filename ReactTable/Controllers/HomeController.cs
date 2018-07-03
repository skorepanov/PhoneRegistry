using ReactTable.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactTable.Controllers
{
    public class HomeController : Controller
    {
        static List<Phone> Phones = new List<Phone>
        {
            new Phone { Id = Guid.NewGuid().ToString(), Vendor = "Samsung", Model = "S7", Price = 50000,
                PriceHistory = new int[] { 54000, 55000, 51000, 50000 } },
            new Phone { Id = Guid.NewGuid().ToString(), Vendor = "Samsung", Model = "S8", Price = 70000,
                PriceHistory = new int[] { 74000, 72000, 72000, 70000 } },
            new Phone { Id = Guid.NewGuid().ToString(), Vendor = "Apple", Model = "iPhone 7", Price = 60000,
                PriceHistory = new int[] { 59000, 60000, 61000, 60000 } },
            new Phone { Id = Guid.NewGuid().ToString(), Vendor = "Apple", Model = "iPhone 8", Price = 80000,
                PriceHistory = new int[] { 75000, 85000, 83000, 80000 } },
            new Phone { Id = Guid.NewGuid().ToString(), Vendor = "Dexp", Model = "Energy", Price = 65000,
                PriceHistory = new int[] { 65000, 65000, 65000, 65000 } }
        };

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetVendors()
        {
            return Json(Phones.Select(p => p.Vendor).Distinct().OrderBy(v => v), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPhones()
        {
            return Json(Phones, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetPhonesByVendor(string vendor)
        {
            IEnumerable<Phone> phones;

            if (!string.IsNullOrWhiteSpace(vendor) && vendor.ToLower() != "all")
            {
                phones = Phones.Where(p => p.Vendor.ToLower() == vendor.ToLower());
            }
            else
            {
                phones = Phones;
            }

            return Json(phones, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetSortedPhones(string sort = "")
        {
            IEnumerable<Phone> phones;

            switch (sort.ToLower())
            {
                case "vendor":
                    phones = Phones.OrderBy(p => p.Vendor).ThenBy(p => p.Model);
                    break;
                case "price":
                    phones = Phones.OrderBy(p => p.Price);
                    break;
                default:
                    phones = Phones;
                    break;
            }

            return Json(phones, JsonRequestBehavior.AllowGet);
        }
    }
}