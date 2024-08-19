import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';
    
const categories = [
        {
            "id": 1,
            "title": 'Clothing', 
            "imageUrl": 'https://i.ibb.co/tsvX289/Clothing.png',
            route: 'shop/clothing'
        },
        {
            "id": 2,
            "title": 'Stickers',
            "imageUrl": 'https://i.ibb.co/cwY0X0D/Stickers.png',
            route: 'shop/stickers'
        },
        {
            "id": 3,
            "title": 'Art',
            "imageUrl": 'https://i.ibb.co/7bb9JbH/art.png',
            route: 'shop/art'
        },
        {
            "id": 4,
            "title": '3D Prints',
            "imageUrl": 'https://i.ibb.co/rxxvn98/3dprints.png',
            route: 'shop/3d%20prints'
        },
        {
            "id": 5,
            "title": 'Jewelry',
            "imageUrl": 'https://i.ibb.co/QJk54nN/3dprintjewelry.png',
            route: 'shop/jewelry'
        },
    ];


    const Directory = () => {
        return (
            <DirectoryContainer>
                {categories.map((category) => (
                    <DirectoryItem key={category.id} category={category} />
                ))}
            </DirectoryContainer>
    );
};

export default Directory;