import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-center items-center'>
            <ul className='flex'>
                <li className='px-2 py-4 font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500'>
                    <Link to={"/alphabet"}>Bảng chữ cái</Link>
                </li>
                {/* <li className='px-2 py-4 font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500'></li>
                <li className='px-2 py-4 font-serif font-bold rounded-lg hover:bg-gray-300 hover:text-amber-700 active:bg-gray-700 active:text-amber-500'></li> */}
            </ul>
        </nav>
    )
}

export default Header;