import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const PlantSelector = ({ plants }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Выбранный ID:', data.plantId);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded">
      <Form.Group controlId="plantSelect" className="mb-3">
        <Form.Label>Выберите завод:</Form.Label>
        <Form.Select 
          {...register("plantId", { required: true })}
          aria-label="Выберите завод"
        >
          <option value="">-- Выберите вариант --</option>
          {Object.entries(plants).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Подтвердить выбор
      </Button>
    </Form>
  );
};

export default PlantSelector;