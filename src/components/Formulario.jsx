const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Name:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="rounded-md mt-2 block w-full p-3 bg-gray-200"
                    placeholder="Customer name"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Business:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="rounded-md mt-2 block w-full p-3 bg-gray-200"
                    placeholder="Client Company"
                    name="empresa"
                    defaultValue={cliente?.empresa}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="rounded-md mt-2 block w-full p-3 bg-gray-200"
                    placeholder="Customer Email"
                    name="email"
                    defaultValue={cliente?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Telephone:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="rounded-md mt-2 block w-full p-3 bg-gray-200"
                    placeholder="Customer Phone"
                    name="telefono"
                    defaultValue={cliente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notes:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="rounded-md mt-2 block w-full p-3 bg-gray-200 h-40 align-self"
                    placeholder="Client Notes"
                    name="notas"
                    defaultValue={cliente?.notas}
                />
            </div>
        </>
    )
}

export default Formulario