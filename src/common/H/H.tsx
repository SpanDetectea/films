import { ReactElement } from 'react';
import { IH } from '../../types/IH';
import './H.scss';



function H ({type, value}: IH): any {
    switch (type) {
        case 1:
        return <h1 className='h'>{value}</h1> 
        case 2:
        return <h2 className='h'>{value}</h2> 
        case 3:
        return <h3 className='h'>{value}</h3> 
    }
}
export default H;