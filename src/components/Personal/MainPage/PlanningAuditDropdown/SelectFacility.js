import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PlantSelector = ({ plants }) => {
  const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log('Выбранный ID:', data.plantId);
    navigate(`/Planing_audit_page/${data.plantId}`)
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded">
      <Form.Group controlId="plantSelect" className="mb-3">
        <Form.Select 
          {...register("plantId", { required: true })}

          required
          size='lg'
        >
          <option value="">-- Выберите версию ДК ТОС --</option>
          {Object.entries(plants).map(([id, name]) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="outline-dark" type="submit" size='lg' style={{width:"100%"}}>
        Подтвердить выбор
      </Button>
    </Form>
  );
};

export default PlantSelector;