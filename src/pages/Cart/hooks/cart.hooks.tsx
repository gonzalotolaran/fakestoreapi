
import {selectNumberOfCartItems, selectItems, selectItemOrder} from '../../../store/redux-toolkit/cart/cartSlice';
import {useSelector} from 'react-redux';

const useItems = () => {

    const count = useSelector(selectNumberOfCartItems);
    const items = useSelector(selectItems);
    const itemOrder = useSelector(selectItemOrder);
    const sortedItems = itemOrder.map(index => items[index])

    return { count, sortedItems }
}


export {
    useItems
}