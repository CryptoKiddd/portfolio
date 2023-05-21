import {BallCanvas} from './canvas'
import { SectionWrapper } from './hoc'

import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
        technologies.map(tech=>{
          return(
              <BallCanvas icon={tech.icon} />
       
          )
        })
      }
    </div>
  )
}

export default  SectionWrapper(Tech) 
