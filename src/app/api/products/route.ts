import { NextResponse } from "next/server";


const products = [
  {
    "id": 1,
    "name": "Кружка",
    "price": 1500,
    "image": "/product1.jpg",
    "description" : "asasa"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy A25",
    "price": 5500,
    "image": "/product1.jpg",
    "description" : "asasa"
  },
  {
    "id": 3,
    "name": "Тефаль",
    "price": 1500,
    "image": "/product1.jpg",
    "description" : "asasa"
  },
  {
    "id": 4,
    "name": "Кружка",
    "price": 1500,
    "image": "/product1.jpg",
    "description" : "asasa"
  },
  {
    "id": 5,
    "name": "Samsung Galaxy A25",
    "price": 5500,
    "image": "/product1.jpg",
    "description" : "asasa"
  },
  {
    "id": 6,
    "name": "Тефаль",
    "price": 1500,
    "image": "/product1.jpg",
    "description" : "asasa"
  }
]
export async function GET() {
    return NextResponse.json(products)
}