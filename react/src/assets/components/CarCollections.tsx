interface CarCollectionProps {
    name: string;
    model: number | string;
    year?: boolean;
}



export function CarCollections({name, model, year = false}: CarCollectionProps) {
    return(
        <article>
            <h2>
                {name} {year && <span>🚓</span>}
            </h2>
            <p>{model}</p>
            
        </article>
    )
}