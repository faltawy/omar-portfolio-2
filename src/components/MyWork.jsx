import { useState } from "react";
import Image from "./Image";

const works = [
    { img: 'https://picsum.photos/800/900', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/800/600', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/700/700', title: 'logo design for assar startup', category: 'logo design' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/300', title: 'logo design for assar startup', category: 'social media design' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'digital drawing' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
    { img: 'https://picsum.photos/800/800', title: 'logo design for assar startup', category: 'other stuff' },
]

function getCategories() {
    let categories = [];
    works.forEach((work) => {
        const cat = work.category;
        if (!categories.includes(cat)) {
            categories.push(cat)
        }
    })
    return categories
}

function Switch({ category, change, selected }) {
    const ifSelected = selected === category;

    return (
        <button className={`transition-all whitespace-nowrap text-neutral-100 text-sm leading-tight ${ifSelected ? 'font-bold text-opacity-100' : 'text-opacity-60 font-semibold'}`} onClick={() => { change(category) }}>
            <span>{category.toLowerCase()}</span>
        </button>
    )
}

function MyWork() {
    const categories = getCategories()
    const [selected, setSelected] = useState(categories[0])
    return (
        <section className='w-full bg-neutral-700 mt-5'>
            <div className="container mx-auto">
                <div className="w-full overflow-x-auto">
                    <div className="flex p-3 gap-3 whitespace-nowrap items-center justify-start">
                        {
                            categories.map((c, index) => (
                                <Switch category={c} selected={selected} change={setSelected} key={index} />))
                        }
                    </div>
                </div>
                <div className="works grid grid-cols-1 sm:grid-cols-3 items-center place-content-center place-items-center w-full gap-3 p-2">
                    {
                        works.map(
                            function (work, index) {
                                return (work.category === selected && <Image {...work} key={index} delay={100 + index*20 + 'ms'} />)
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default MyWork