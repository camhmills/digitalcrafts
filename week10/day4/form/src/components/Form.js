import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash.debounce'

export default function Form() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state);
    const counter = useSelector((state) => state.Counter);
    const debouncedChangeHandler = useMemo(() => {
        return debounce(dispatch, 300);
    }, [dispatch]);
    return (
        <div>
            <input onChange = {(e) => }type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>  
        </div>
    )
}
