import React, { useState } from "react";
import "../assets/style/style.css";

export function FormTickets({ onFormSubmit }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [resolved, setResolved] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.length < 6 || title.length > 18) {
      alert("El título debe tener entre 6 y 18 caracteres");
      return;
    }
    if (!priority) {
      alert("Seleccione la prioridad");
      return;
    }
    const formData = {
      title: title,
      priority: priority,
      description: description,
      resolved: resolved,
    };
    onFormSubmit(formData);
  };

  return (
    <div className="content-containerForm">
      <h2>Add Yours Tickets</h2>
      <form className="form-main" onSubmit={handleSubmit}>
        <label className="container-title">
          Title:
          <input
            className="title-content"
            type="text"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="container-select">
          Priority:
          <select
            className="select-content"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="P1">Low</option>
            <option value="P2">Medium</option>
            <option value="P3">Hard</option>
          </select>
        </label>

        <label className="container-description">
          Description:
          <textarea
            className="description-content"
            name="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={250}
          />
        </label>

        <label className="container-checkbox">
          Mark as resolved:
          <input
            className="checkbox-content"
            type="checkbox"
            name="resolved"
            checked={resolved}
            onChange={(e) => setResolved(e.target.checked)}
          />
        </label>

        <div className="button-content">
          <button className="button-form" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
