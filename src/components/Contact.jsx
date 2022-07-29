import React from 'react'
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import Heading from './Heading';

function ContactItem({ label, icon, to, item, variant, inView, delay }) {
    console.log(inView);
    return (
        <a href={to} style={{ animationDelay: delay }} className={`w-full group text-neutral-200 h-fit rounded-lg py-3 px-2 bg-zinc-600 flex items-center flex-col gap-3 ${inView && 'show__contact2'}`}>
            <span className='text-3xl'>
                {icon}
            </span>
            <span className='group-hover:tracking-wider transition-all'>{label.toUpperCase()}</span>
            <span>{item}</span>
        </a>
    )
}


function Contact() {
    const { ref, inView, entry } = useInView();
    return (
        <section ref={ref} className="w-full flex flex-col items-center gap-5 p-5">
            <Heading label='Contact' />
            <div className="container mx-auto grid sm:grid-cols-4 grid-cols-2 gap-4 place-content-between">
                <ContactItem icon={<FaHome />} to='' delay='0s' inView={inView} label='LOCATION' />
                <ContactItem icon={<FaHome />} to='' delay='.1s' inView={inView} label='Social Media' />
                <ContactItem icon={<FaHome />} to='' delay='.3s' inView={inView} label='Behance' />
                <ContactItem icon={<MdEmail />} to='' delay='.5s' inView={inView} label='Email' />
            </div>
        </section>
    )
}

export default Contact