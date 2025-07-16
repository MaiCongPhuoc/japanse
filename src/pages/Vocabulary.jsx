import { Tree } from 'antd';

const Vocabulary = () => {
    const treeData  = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                children: [
                { title: 'leaf', key: '0-0-0-0' },
                {
                    title: (
                    <>
                        <div>multiple line title</div>
                        <div>multiple line title</div>
                    </>
                    ),
                    key: '0-0-0-1',
                },
                { title: 'leaf', key: '0-0-0-2' },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: 'leaf', key: '0-0-1-0' }],
            },
            {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                { title: 'leaf', key: '0-0-2-0' },
                {
                    title: 'leaf',
                    key: '0-0-2-1',
                },
                ],
            },
            ],
        },
        {
            title: 'parent 2',
            key: '0-1',
            children: [
            {
                title: 'parent 2-0',
                key: '0-1-0',
                children: [
                { title: 'leaf', key: '0-1-0-0' },
                { title: <p>abc</p>, key: '0-1-0-1' },
                ],
            },
            ],
        },
    ];
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
    return (
        <div>
        <Tree
            showLine={true}
            defaultExpandedKeys={['0-0-0']}
            onSelect={onSelect}
            treeData={treeData}
        />
        </div>
    );
}

export default Vocabulary;