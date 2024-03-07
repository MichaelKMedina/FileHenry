import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    pais: "",
    temporada: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envía los datos del formulario al action creator
    createActivity(form);
    // Limpiar el formulario después de enviar
    setForm({
      nombre: "",
      dificultad: "",
      duracion: "",
      pais: "",
      temporada: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor="nombre">nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="Dificultad">Dificultad (1 al 5)</label>
          <input
            type="text"
            name="dificultad"
            value={form.dificultad}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="duracion">Duración (en horas)</label>
          <input
            type="text"
            name="duracion"
            value={form.duracion}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="pais">Pais de actividad</label>
          <input
            type="text"
            name="pais"
            value={form.pais}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="temporada">Temporada</label>
          <input
            type="text"
            name="temporada"
            value={form.temporada}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <button type="submit">
          Crear
        </button>
      </div>
    </form>
  );
};

export default Form;
