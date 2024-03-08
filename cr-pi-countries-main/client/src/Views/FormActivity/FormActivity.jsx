import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities)
  const [newActivity, setNewActivity] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    pais: "",
    temporada: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivities(newActivity));
    setNewActivity({
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
            value={newActivity.nombre}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="Dificultad">Dificultad (1 al 5)</label>
          <input
            type="text"
            name="dificultad"
            value={newActivity.dificultad}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="duracion">Duración (en horas)</label>
          <input
            type="text"
            name="duracion"
            value={newActivity.duracion}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="pais">Pais de actividad</label>
          <input
            type="text"
            name="pais"
            value={newActivity.pais}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="temporada">Temporada</label>
          <input
            type="text"
            name="temporada"
            value={newActivity.temporada}
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
