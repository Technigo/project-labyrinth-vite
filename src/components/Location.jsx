import { Action } from './Action'
import { useLabyrinthStore } from '../store/useLabyrinthStore'
import '../styles/Location.css'

export const Location = () => {

    const { description, loading } = useLabyrinthStore()

    return(
        <main className="location">
        {loading && (
        <p>loading</p> 
        )}
        {!loading && (
        <>
        <h2>Description:</h2>
        <p>{description}</p>
        <Action />
        </>
        )}
        </main>
    )
 };