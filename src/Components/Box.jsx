import React from 'react';

//introduced a function with color and count properties 

function Box(props) {
    if (props.count.length === 0) {
        return (
            < >

            </>
        )
    } else {
        return (
            props.count.map((currbox, i = 0) => {
                console.log(props.selectedId,currbox.id);
                return (
                    <div 
                        className="box"
                        key={new Date().getTime() + i++} 
                        style={{backgroundColor: (props.selectedId===currbox.id)?"gray":currbox.color}}
                        onClick={(i)=>props.selectBox(currbox.id)}
                        >

                    </div>
                )
            })
        );
    }
}

export default Box;