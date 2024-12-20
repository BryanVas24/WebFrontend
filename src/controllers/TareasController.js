export async function getPrioridades() {
    const prioridades = await fetch(`${import.meta.env.VITE_API_URL}/misc/ObtenerPrioridades`)
    return prioridades.json()
}

export async function crearTarea(tarea){
    const task = await fetch(`${import.meta.env.VITE_API_URL}/misc/CrearTarea`,{
        method:"POST",
        body: JSON.stringify(tarea),
        headers: {
            'Content-Type': 'application/json',
          }
    })
    console.log(task)
    return task.status
}