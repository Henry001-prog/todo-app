import React from 'react';

function toCssClass(numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    if(cols[0]) classes += `col-xs-${cols[0]}`
    if(cols[1]) classes += `col-sm-${cols[1]}`
    if(cols[2]) classes += `col-md-${cols[2]}`
    if(cols[3]) classes += `col-lg-${cols[3]}`

    return classes;
}


export default function Grid({cols, children}) {
    const gridClass = toCssClass(cols || 12)

    return (
        <div className={gridClass} 
            style={
                {
                    display: 'flex', 
                    marginRight: 35, 
                    marginTop: 30
                }
            }>
            {children}
        </div>
    );
}