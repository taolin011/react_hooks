import { useCommon } from '../hooks/useCommon';
import React, { FunctionComponent } from 'react';
interface BProps {}

const B: React.FC<BProps> = () => {
    const [num, increment] = useCommon(4);
    return (
        <div>
            {num}
            <span>B组件</span>
            <button onClick={() => increment()}>加1</button>
        </div>
    );
};

export default B;
