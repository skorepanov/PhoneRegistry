using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactTable.Models
{
    public class Phone
    {
        public string Id { get; set; }
        public string Vendor { get; set; }
        public string Model { get; set; }
        public int Price { get; set; }
        public int[] PriceHistory { get; set; }
    }
}