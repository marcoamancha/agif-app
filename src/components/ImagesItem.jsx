import {useFetchImages} from '../hook/useFetchImages';
import { ListImages } from './ListImages';

export const ImagesItem = ({category}) => {

    const {data, loading} = useFetchImages(category);
    
  return (
    <>
        {
            data.map(info => {
                return(                                
                     <ListImages
                    key={info.id}
                    info={info}
                />                
                )
            })
        }
    </>
  )
}
