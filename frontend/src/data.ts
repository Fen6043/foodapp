import { Food } from "./app/shared/models/Food";

export const sample_food: Food[]=[
    {
    id: '1',
    name:'Burger',
    price:100,
    tags:['Fastfood','Burger','Lunch'],
    favorite:false,
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    origins: ['Germany'],
    cookTime:'40-50'
    },
    {
        id: '2',
        name:'Cereal',
        price:100,
        tags:['Cereal','Breakfast'],
        favorite:false,
        stars: 2.0,
        imageUrl: 'assets/food-2.jpg',
        origins: ['Poland'],
        cookTime:'10-20'
    },
    {
        id: '3',
        name:'Pancake',
        price:100,
        tags:['Pancake','Breakfast'],
        favorite:false,
        stars: 3.0,
        imageUrl: 'assets/food-3.jpg',
        origins: ['USA'],
        cookTime:'30-40'
    },
    {
        id: '4',
        name:'Chicken Sandwitch',
        price:100,
        tags:['Fastfood','Chicken Sandwitch','Breakfast'],
        favorite:false,
        stars: 4.0,
        imageUrl: 'assets/food-4.jpg',
        origins: ['Germany'],
        cookTime:'40-50'
    }
]