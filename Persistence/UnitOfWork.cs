using System.Threading.Tasks;
using Veloz.Core;

namespace Veloz.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext context;

        public UnitOfWork(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
