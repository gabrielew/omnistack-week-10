import React, { useState, useEffect } from "react";

function DevForm({ onSubmit }) {
  const [github, setGithub] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github,
      techs,
      latitude,
      longitude
    });

    setGithub("");
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github">Usuário do Github</label>
        <input
          name="github"
          id="github"
          required
          value={github}
          onChange={e => setGithub(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            onChange={e => {
              setLatitude(e.target.value);
            }}
            value={latitude}
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            onChange={e => {
              setLongitude(e.target.value);
            }}
            value={longitude}
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}
export default DevForm;
