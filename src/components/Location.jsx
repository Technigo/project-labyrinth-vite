// Location which renders
/**
 * location description
 * location actions
 */ 
import { Action } from './Action'
import { useLabyrinthStore } from '../store/useLabyrinthStore'

export const Location = () => {

    const { description } = useLabyrinthStore()

    return(
        <>
        <h2>Description:</h2>
        <p>{description}</p>
        <Action />
        </>
    )
 };