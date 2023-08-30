import React from 'react';
import './textdecorator.css';

export default function TitleDecorator ({content="", fontSize="12px", fontColor="white", type1=true, type2}) {
    return (
        <div style={{fontSize: `${fontSize}`, color: `${fontColor}`}} className='title-decorator'>
            {content}
        </div>
    )
}