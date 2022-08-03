import React from "react";
import "./Form.css";

const Form = ({handleChange, dataForm, getOrder}) => {
    return (
        <form
            onChange={handleChange}
        >
            <h3>Ingrese sus datos para completar la compra</h3>
            <label htmlFor="name">Nombre:</label>
            <input
                type="text" 
                name="name"
                id="name" 
                placeholder="Ingrese su nombre" 
                defaultValue={dataForm.name}
            />
            <label htmlFor="phone">Telefono:</label>
            <input
                type="number" 
                name="phone"
                id="phone"
                placeholder="Ingrese su telefono" 
                defaultValue={dataForm.phone}
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
                type="email" 
                name="email"
                id="email" 
                placeholder="Ingrese su email" 
                defaultValue={dataForm.email}
            />
            <label htmlFor="repEmail">Repita su email:</label>
            <input
                type="email" 
                name="repEmail"
                id="repEmail" 
                placeholder="Repita su email" 
                defaultValue={dataForm.repEmail}
            />

            <button
                onClick={getOrder}
                disabled={!(dataForm.name !== "" 
                && dataForm.phone !== "" 
                && dataForm.email === dataForm.repEmail 
                && dataForm.phone.length > 5
                && dataForm.email.match(/^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
                && dataForm.name.match(/^[a-zA-Z\s]*$/))}
                className="btn m-2" id="button"
            >
                Generar orden
            </button>
        </form>
    )
}

export default Form;
