import { useSelector, useDispatch } from 'react-redux'
import { decNumber, incNumber } from '../Actions/index'
function Reduxx() {

    const myState = useSelector((state) => state.changeTheNumber)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Increment/Decrement counter</h1>
            <h4>using React and Redux</h4>

            <div class="quantity">
                <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
                <input name="quantity" type="text" class="quantity__input" value={myState} />
                <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
            </div>
        </div>
    )
}

export default Reduxx