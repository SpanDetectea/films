import { useTypedSelector } from '../../../Hooks/useTypedSelector/useTypedSelector';
import { IPagination } from '../../../types/IPagination';
import './Pagination.scss';

function Pagination({ curPage, setCurPage }: IPagination) {
    const total = useTypedSelector(state => state.allFilms.total);
    const totalPage = useTypedSelector(state => state.allFilms.totalPages);
    const pageNumbers = (total&&totalPage&&Math.ceil(total / totalPage));

    console.log(total, totalPage, pageNumbers)

    const editCurPage = (type: string) => {
        switch (type) {
            case 'start':
                return setCurPage(1)
            case 'end':
                return setCurPage(pageNumbers)
            case 'inc':
                return setCurPage(curPage + 1)
            case 'dec':
                return setCurPage(curPage - 1)
            default:
                break;
        }
    }
    return <>
        {Number.isInteger(pageNumbers) &&
            <div className="pagination">
                <button onClick={() => editCurPage('start')} disabled={curPage === 1 ? true : false} className='pagination__btn'>
                    {'<<'}
                </button>
                <button onClick={() => editCurPage('dec')} disabled={curPage === 1 ? true : false} className='pagination__btn'>
                    {'<'}
                </button>
                <span className="pagination__pages">
                    {`${curPage} / ${pageNumbers}`}
                </span>

                <button onClick={() => editCurPage('inc')} disabled={curPage === pageNumbers ? true : false} className='pagination__btn'>
                    {'>'}
                </button>
                <button onClick={() => editCurPage('end')} disabled={curPage === pageNumbers ? true : false} className='pagination__btn'>
                    {'>>'}
                </button>
            </div>
        }
    </>
}

export default Pagination;