import { Tree } from 'antd';
import { ListLesson, Lesson } from '../data/listLesson.jsx'
import '../assets/css/style.css'
import { useState } from 'react';

const Vocabulary = () => {
    const [lesson, setLesson] = useState();
  const onSelect = (selectedKeys, info) => {
    setLesson(Lesson[`lesson_${selectedKeys[0]}`])
  };
  console.log(lesson)
    return (
        <div className='mx-10'>
            <div className='grid grid-cols-3'>
                <div className='overflow-y-scroll h-[calc(100vh-200px)]'>
                    <Tree
                        showLine={true}
                        onSelect={onSelect}
                        treeData={ListLesson}
                    />
                </div>
                <div className='col-span-2 overflow-y-scroll h-[calc(100vh-200px)]'>
                    {lesson && lesson.map((item, index) => {
                        return (
                            <div className='flex border gap-3 px-3 pl-3' key={`${item.japan}-${index}`}>
                                <div className='w-6 h-6 text-center leading-[21px] rounded-full border border-neutral-800 mt-2'>{index + 1}</div>
                                <div>
                                    <p className='text-blue-700'>{item.japan}</p>
                                    <p>{item.kanji}</p>
                                    <p className='text-blue-700'>{item.vietnam}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Vocabulary;