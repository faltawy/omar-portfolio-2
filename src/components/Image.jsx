import { Fragment } from "react"
import { FaExpandArrowsAlt } from "react-icons/fa"
import Overlay from "./Overlay"
import useExpand from "./useExpand"

export default function Image({ img, category, title }) {
    const [expanded, toggle] = useExpand(false)

    return (
        <Fragment>
            <Overlay expanded={expanded} toggle={toggle} image_url={img} />
            <div className='shadow-xl show w-[250px] group h-[350px] relative rounded-2xl overflow-hidden hover:-translate-y-1 transition-all hover:shadow-2xl'>
                <div className="w-full absolute flex items-center justify-center inset-0 h-full bg-gray-900 transition-all opacity-0 group-hover:opacity-50">
                    <button onClick={toggle} className='sm:cursor-pointer text-White'>
                        <FaExpandArrowsAlt size={60} />
                    </button>
                </div>
                <div className='w-full h-full bg-slate-100  overflow-hidden'>
                    <img src={img} loading='lazy' className='w-full h-full object-cover bg-black' alt="" />
                </div>
            </div>
        </Fragment >
    )
}