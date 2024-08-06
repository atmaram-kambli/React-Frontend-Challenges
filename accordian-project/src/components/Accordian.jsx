import React, { useState } from 'react'

const Accordian = () => {
    const accordionData = [
        {
            id: 1,
            question: "What is JavaScript?",
            answer: "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites."
        },
        {
            id: 2,
            question: "What is the use of arrays in JavaScript?",
            answer: "Arrays in JavaScript are used to store multiple values in a single variable. They are an essential part of any programming language, allowing for the organization and management of collections of data."
        },
        {
            id: 3,
            question: "How do you create a function in JavaScript?",
            answer: "A function in JavaScript can be created using the `function` keyword followed by a name, parentheses, and a block of code enclosed in curly braces. For example: `function myFunction() { console.log('Hello, World!'); }`."
        },
        {
            id: 4,
            question: "What is the DOM?",
            answer: "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects, allowing languages such as JavaScript to interact with the page."
        },
        {
            id: 5,
            question: "What is an event in JavaScript?",
            answer: "An event in JavaScript is an action or occurrence recognized by software, often originating from the user, such as clicks, key presses, or mouse movements. JavaScript can be used to execute code when events are detected."
        },
        {
            id: 6,
            question: "What is a closure in JavaScript?",
            answer: "A closure in JavaScript is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are often used to create private variables or functions."
        },
        {
            id: 7,
            question: "What is the purpose of the `this` keyword?",
            answer: "The `this` keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used: in a method, `this` refers to the owner object; alone, `this` refers to the global object; in a function, `this` refers to the global object in non-strict mode and `undefined` in strict mode; in an event, `this` refers to the element that received the event."
        },
        {
            id: 8,
            question: "What are promises in JavaScript?",
            answer: "Promises in JavaScript represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are used to handle asynchronous operations more gracefully, avoiding the complexities of callback functions."
        },
        {
            id: 9,
            question: "What is the difference between `let` and `var`?",
            answer: "`let` and `var` are both used to declare variables in JavaScript, but `let` has block scope, meaning it is only accessible within the block it is defined, while `var` has function scope, meaning it is accessible within the function it is defined."
        },
        {
            id: 10,
            question: "What is `async` and `await`?",
            answer: "`async` and `await` are keywords used in JavaScript to handle asynchronous operations more cleanly. `async` is used to declare an asynchronous function, and `await` is used to wait for a promise to resolve within an async function."
        }
    ];

    const [selected, setSelected] = useState(null);
    const [multiSelected, setMultiSelected] = useState([]);
    const [enableMultiSelection, setEnableMultiSelection] = useState([false]);

    const handleSingleSelection = (id) => {
        if(selected === null) {
            setSelected(id);
        }
        else if(selected !== null && selected === id) {
            setSelected(null);
        }
        else {setSelected(id)}
    }
    const handleMultipleSelection = (id) => {
        const ind = multiSelected.indexOf(id)
        if(ind === -1 || multiSelected.length == 0) {
            setMultiSelected([...multiSelected, id]);
        }
        else {
            setMultiSelected(() => {
                const newArr = [...multiSelected]
                newArr.splice(ind, 1);
                return newArr
            })
        }
        // console.log(ind)

        // console.log(multiSelected)
    }

    return (
        <>
            <h1>Accordian</h1>
            <button className='my-2 bg-cyan-950'  onClick={() => setEnableMultiSelection(!enableMultiSelection)}>{enableMultiSelection === false ? 'Enable Multiple Selection':'Disable Multiple Selection'}</button>
            <div className="accordian text-white flex flex-col gap-10 my-10 border-red-100">
                {(accordionData && accordionData.length > 0) ? ( 
        
                    accordionData.map((dataItem) => {
                        return (

                        <div key={dataItem.id} className='text-center w-2/3 mx-auto '>

                            <div className='flex bg-cyan-800 h-10 justify-between items-center gap-10 mx-auto' onClick={
                                enableMultiSelection ? () => handleMultipleSelection(dataItem.id) :
                                () => handleSingleSelection(dataItem.id)
                                }>
                                <h3 className='px-4'>{dataItem.question}</h3>
                                <span className='py-2 px-4 font-bold'>+</span>
                            </div>
                            <div className='bg-slate-700'> 
                            { !enableMultiSelection ? selected === dataItem.id && <p className='px-4 py-2'>{dataItem.answer}</p> :
                                multiSelected.indexOf(dataItem.id) !== -1 && <p className='px-4 py-2'>{dataItem.answer}</p>
                            }
                            </div>

                        </div>
                        )                        
                    }
            )) : (
                    <div><p>No data Found</p></div>
                )
                }
            </div>
        </>
    )
}

export default Accordian