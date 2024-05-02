import { useCommon } from '../hooks/useCommon';
import React, { FunctionComponent } from 'react';
interface AProps {}

const A: FunctionComponent<AProps> = () => {
    const [num, increment] = useCommon(5);
    return (
        <div>
            <span>A组件{num}</span>
            <button onClick={() => increment()}>加1</button>
        </div>
    );
};

export default A;
