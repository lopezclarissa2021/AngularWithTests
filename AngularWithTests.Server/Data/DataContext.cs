using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularWithTests.Server.Models;

namespace AngularWithTests.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext (DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<AngularWithTests.Server.Models.Customer> Customer { get; set; } = default!;
    }
}
