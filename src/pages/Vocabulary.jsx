import { Tree } from 'antd';
import { ListLesson } from '../data/listLesson.jsx'
import '../assets/css/style.css'

const Vocabulary = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected: ', selectedKeys[0]);
  };
    return (
        <div className='mx-10'>
            <div className='grid grid-cols-3 h-[calc(100vh-187px)]'>
                {/* <div className='overflow-y-scroll'>
                    <Tree
                        showLine={true}
                        onSelect={onSelect}
                        treeData={ListLesson}
                    />
                </div>
                <div className='col-span-2'>
                    <Tree
                        showLine={true}
                        onSelect={onSelect}
                        treeData={ListLesson}
                    />
                </div> */}
            </div>
        </div>
    );
}

export default Vocabulary;