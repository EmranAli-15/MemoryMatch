import { useState } from 'react';
import { BoardData } from './utils/makeBoard';

import wrong from './assets/wrong.svg';
import right from './assets/right.svg';

import './App.css';

export default function App() {

  const [data, setData] = useState(BoardData);
  const [start, setStart] = useState(false);
  const [actioned, setActioned] = useState(false);
  const [arr, setArr] = useState([{}, {}]);

  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);

  const fn = (obj) => {
    if (arr[0].id) {
      setActioned(true);
      setArr([arr[0], obj]);

      setTimeout(() => {
        if (arr[0].id == obj.id) {
          setRightAns(ans => ans + 1);

          const updateMatched = data.map((d) => {
            if (d.id == obj.id) {
              return (
                {
                  id: d.id,
                  icon: d.icon,
                  key: d.key,
                  matched: true
                }
              )
            }
            else return d;
          })

          setData(updateMatched);
        }
        else setWrongAns(ans => ans - 1);

        setArr([{}, {}]);
        setActioned(false);
      }, 1500);
    }
    else setArr([obj, 0])
  }

  setTimeout(() => {
    setStart(true);
  }, 5000);

  return (
    <div className='h-[100vh] flex flex-col items-center'>

      {/* Marking section */}
      <section className='pt-5 pb-16'>
        <div className='flex items-center justify-between gap-x-16'>
          <div className='flex items-center gap-x-2'>
            <img className='size-10' src={right} alt="" />
            <h1 className='text-4xl font-bold text-white'>{rightAns}</h1>
          </div>
          <div className='flex items-center gap-x-2'>
            <img className='size-8' src={wrong} alt="" />
            <h1 className='text-4xl font-bold text-white'>{wrongAns}</h1>
          </div>
        </div>
      </section>


      {/* Board section */}
      <section>
        <div className='grid grid-cols-5 gap-2 w-full'>
          {
            data.map((data, index) => {
              return (
                <button
                  key={index}
                  className={`${arr[0].key == data.key ? "card" : arr[1].key == data.key ? "card" : !start ? "card animate-pulse" : ""}`}
                  onClick={() => fn(data)}
                  disabled={data.key == arr[0].key || data.key == arr[1].key || data.matched || actioned || !start}
                >
                  <div className="content">
                    <div className={`${data.matched && "!bg-[#3391c77a] blur-xs rounded"} front`}>
                    </div>
                    <div className="back p-[5px]">
                      <img src={data.icon} alt="" />
                    </div>
                  </div>
                </button>
              )
            })
          }
        </div>
      </section>

    </div>
  )
}
