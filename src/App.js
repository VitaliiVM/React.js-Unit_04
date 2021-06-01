import './App.css';
import React from 'react';

function App() {
    let count4 = 0;
    let outCheckBox = React.createRef();
    let task6Out = React.createRef();
    let task7Out = React.createRef();
    let task8Out = React.createRef();
    let task9Out = React.createRef();
    let task10Out = React.createRef();

    function task1() {
        console.log('task1');
    }

    function task2() {
        console.log("task2");
        let div = document.querySelector('.task-2');
        div.classList.add('active');
    }

    function task3(event) {
        console.log(event.target.value);
    }

    function task4() {
        count4++;
        console.log(count4);
    }

    function task5(event) {
        let atr = event.target.attributes.currentvalue.value
        if (event.target.checked) {
            outCheckBox.current.textContent = atr;
        } else {
            outCheckBox.current.textContent = 0;
        }
    }

    function task6(event) {
        let val = event.target.value;
        task6Out.current.textContent = val;
    }

    function task7() {
        const randomInt = () => {
            return Math.floor(Math.random() * 255) + 1;
        };

        const randomBackgroundColor = () => {
            return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
        };

        return (task7Out.current.style.backgroundColor = randomBackgroundColor());
    }

    function task8(event) {
        let out = "";
        let type = task8Out.current.textContent;
        type = event.key;
        if (!isNaN(type)) {
            out += 1;
        } else {
            out += 0;
        }
        return task8Out.current.textContent += out;
    }

    function task9(event) {
        return task9Out.current.textContent = event.target.value;
    }

    let ar10 = [5, 6, 7];

    function task10() {
        let num = task10Out.current.value
        console.log(num);
        if (num !== '') {
            ar10.push(+num);
        }
        console.log(ar10);
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <button className="task-1" onClick={task1}>Push</button>
            </section>
            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2}></div>
            </section>
            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3}/>
            </section>
            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>Count</button>
            </section>
            <section>
                <h2>Task 5</h2>
                <input type="checkbox" currentvalue="55" onChange={task5} ref={outCheckBox}/>
                <div className="out-5" ref={outCheckBox}/>
            </section>
            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6} ref={task6Out}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div className='out-6' ref={task6Out}/>
            </section>
            <section>
                <h2>Task 7</h2>
                <div className="block-7" ref={task7Out}></div>
                <button className="task-7" onClick={task7}>Color</button>
            </section>
            <section>
                <h2>Task 8</h2>
                <input type="text" className="task-8" onKeyPress={task8}></input>
                <div className="out-8" ref={task8Out}></div>
            </section>
            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div className="out-9" ref={task9Out}/>
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={task10Out}></input>
                <button className="task-10" onClick={task10}>Push</button>
            </section>
        </>
    );
}

export default App;
