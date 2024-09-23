import { AiFillStar } from "react-icons/ai"; 
import React from 'react'
import Container from './Container'
import { motion } from "framer-motion";

export default function SocialProof() {
    const socialProofItems = [
      {
        authorName: "John Doe",
        storeLink: "https://johnsart.com/",
        comment: "Printify has transformed my art business, allowing me to create custom designs without worrying about inventory. I can now focus on creativity instead of logistics. Highly recommended!",
        authorPhoto: "	https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg"
      },
      {
        authorName: "Emily Brown",
        storeLink: "https://emilysfashionhub.com/",
        comment: "Working with Printify has been seamless. Their variety of options and affordable pricing have made it easier for my fashion brand to offer unique items without bulk orders.",
        authorPhoto: "	https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg"
      },
      {
        authorName: "Michael Lee",
        storeLink: "https://michaelsgadgets.com/",
        comment: "Printify has been a game changer for my business. From quality products to exceptional customer service, the entire experience has been smooth. Highly satisfied!",
        authorPhoto: "	https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg"
      }
    ];    
      
  return (
    <section className="bg-[#f7f7f7] py-20">
        <Container>
            <div className='tracking-tight mx-auto text-center space-y-5'>

                <h2 className='text-4xl font-bold max-w-xl mx-auto'>
                Trusted by over <br className="sm:hidden"/><span className='text-green-500'>8M sellers</span> around the world
                </h2>
                <p className='text-gray-500 max-w-3xl mx-auto'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience. </p>
            </div>
            <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    socialProofItems.map((item, index) => (
                        <motion.div viewport={{ once: true }} whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:0.5, delay:index*0.1, ease:"easeIn"}} key={index} className='bg-white p-4 rounded-lg shadow-lg space-y-4 cursor-pointer hover:shadow-2xl transition-all duration-300 border overflow-hidden'>
                            <div className="flex items-center gap-2"> 
                            <img src={item.authorPhoto} alt={item.authorName} className='w-12 h-12 rounded-full' />

                            <div className="space-y-1">
                            <a href={item.storeLink} target="_blank" rel="noopener noreferrer" className=''>{item.authorName}</a>
                            <div className='flex items-center'>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>

                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            </div>
                            </div>
                            </div>
                            <p className='text-gray-500'>{item.comment}</p>
                        </motion.div>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}
