function Text ({texto, tamaño}) {
    return (
        <>
        {tamaño === "titulo-principal" ? (
            <h1 class="text-center my-4">{texto}</h1>
        ) : tamaño === "titulo" ? (
            <h3 class="text-center my-4">{texto}</h3>
        ) : (
            <p class="text-center my-4">{texto}</p>
        ) }
        </>
    )
}
export default Text