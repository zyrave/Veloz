using System.Threading.Tasks;

namespace Veloz.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
