import { motion } from 'framer-motion'
import React from 'react'



const AboutMe = () => {
    const variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: .5
          }
        }
      }
    
      const children = {
        hidden: {
          opacity: 0,
          x: -200
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 1
          }
        }
      }
    
    return (
        <div className='my-5 bg-white bg-opacity-30 container mx-auto p-2 md:p-5'>
            <motion.div variants={variants} initial='hidden' whileInView='show' id='subNav' transition={{duration: 2}} className='w-full md:w-5/6 mx-auto'>
                <motion.h3 variants={children} className='text-3xl font-semibold text-center underline cursor-pointer'>About Me</motion.h3>
                <motion.p variants={children} className='font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quibusdam amet cumque veritatis voluptatibus provident nulla explicabo vitae laboriosam laborum voluptates molestias temporibus possimus vel id quisquam, ullam sequi eveniet labore beatae iusto. Quisquam repellendus repellat facilis. Voluptatum, quasi. Labore dolorum earum deserunt incidunt pariatur eum, exercitationem ab amet, quod commodi asperiores laudantium sit totam quaerat porro, inventore iste dignissimos. Odit facilis ex ab molestias. Vitae optio corporis fugiat quibusdam facere id, natus consectetur accusamus consequuntur ut. Dolores aspernatur tenetur ut? Eaque incidunt dolorum quos autem distinctio amet? Quia laboriosam maxime iste neque ducimus, mollitia totam officiis voluptate ratione eos exercitationem voluptates suscipit sunt alias veritatis velit dolore animi! Aperiam dignissimos saepe natus quasi numquam eveniet dolorum repudiandae id inventore exercitationem incidunt, rem, ab, obcaecati labore culpa vero sequi quaerat expedita rerum itaque veniam voluptatem! Necessitatibus mollitia dicta nihil dolore quaerat corporis? Inventore possimus ea dicta earum sed necessitatibus, omnis officia velit consequatur illo amet aspernatur, similique modi nisi. Laudantium perferendis dolores, aliquam incidunt saepe itaque corporis est ex non ut doloribus rem? Nihil repellat dolores, ducimus blanditiis, sed libero nulla dolor, dolorem consequatur quam earum asperiores excepturi obcaecati natus cupiditate quidem. Voluptatem suscipit, corrupti facere, ut animi delectus nesciunt debitis accusamus, non officiis quis vero eos earum. Enim veniam quis optio nemo architecto maxime rem quibusdam placeat. Quas aspernatur optio veniam exercitationem obcaecati, odit est quis voluptas magni numquam soluta dolor ab enim ullam tempore molestiae aliquam distinctio mollitia itaque praesentium nihil unde. Saepe explicabo sint dolorum qui placeat perspiciatis inventore sapiente ratione, voluptatem deserunt repudiandae minus pariatur, ipsa, optio repellendus voluptate vero dicta provident atque at soluta nam. Porro, minus! Iste, dolorem quos qui illum deserunt impedit repudiandae inventore aliquam sequi recusandae quisquam pariatur natus laboriosam tenetur quis nesciunt corporis fugit reprehenderit iure eaque nam labore dolor. Libero, aut accusantium, ratione quos laborum veritatis animi corporis inventore omnis dolore minus possimus nam id aliquid vero quaerat quisquam, non explicabo! Soluta illum quaerat, omnis deleniti similique aspernatur, fuga unde repellat voluptatem ut ex sint sapiente assumenda! Voluptatum ad perspiciatis sit laudantium esse error commodi incidunt voluptatibus eos fuga quis ab dolore, eveniet, suscipit illum eum dolores asperiores possimus dolorem? Nihil nostrum, amet eum modi illo nulla officia, ab deserunt eos maxime sequi ipsum ut fugit labore ipsa repellendus saepe? A commodi quae, repellat odio doloremque cupiditate, sit rerum amet molestiae blanditiis pariatur. Repellat assumenda quos commodi mollitia, asperiores quia non, vel laudantium error in suscipit maxime cum repellendus possimus, distinctio quasi. Ipsa ducimus quis vitae, quasi doloremque architecto maxime placeat, veniam ea unde minima nostrum, facere enim. Aspernatur, vel, dicta ullam eligendi beatae ab velit quas corporis voluptatibus tenetur aliquam. Ipsa corporis, deserunt beatae voluptatem dolor at eligendi veniam ex error quia magni deleniti possimus tempora quos officiis libero alias inventore mollitia dolores ratione, facilis ut debitis. Optio quo asperiores, consequatur explicabo omnis repudiandae ut dolorem, veritatis voluptates maiores commodi vitae, accusamus quisquam. Aspernatur a cupiditate doloribus porro odit quae, non ullam error autem repudiandae? Incidunt dolore vero nesciunt.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default AboutMe