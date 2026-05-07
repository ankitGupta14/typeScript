export function CarCollections({name, model, year = false}) {
    return(
        <article>
            <h2>
                {name} {year && <span>🚓</span>}
            </h2>
            <p>{model}</p>
            
        </article>
    )
}