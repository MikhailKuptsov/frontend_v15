import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const FormMainData = ({ data, onChange, userOptions, facilityOptions }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...data,
      results_access: data.results_access === "choice_true" // преобразуем строку в boolean при инициализации
    }
  });

  const onSubmit = (formData) => {
    // Отправляем данные без преобразования results_access
    onChange({
      ...formData,
      // activation остается как есть ("on_demand" или "by_datetime")
      // results_access уже содержит true/false
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
          <Form.Label>Название</Form.Label>
          <Form.Control 
            type="text" 
            {...register('name')} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            {...register('description')} 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="facility_id">
          <Form.Label>Объект</Form.Label>
          <Select 
            options={facilityOptions} 
            placeholder="Выберите объект"
            onChange={(selected) => onChange({ facility_id: selected?.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="audit_leader">
          <Form.Label>Руководитель аудита</Form.Label>
          <Select 
            options={userOptions} 
            placeholder="Выберите руководителя"
            onChange={(selected) => onChange({ audit_leader: selected?.value })}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="start_datetime">
          <Form.Label>Дата начала</Form.Label>
          <Form.Control 
            type="datetime-local" 
            {...register('start_datetime')} 
          />
        </Form.Group>

        <Form.Group as={Col} controlId="end_datetime">
          <Form.Label>Дата окончания</Form.Label>
          <Form.Control 
            type="datetime-local" 
            {...register('end_datetime')} 
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="activation">
          <Form.Label>Активация</Form.Label>
          <Form.Select {...register('activation')}>
            <option value="on_demand">По требованию</option>
            <option value="by_datetime">По расписанию</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="results_access">
          <Form.Label>Доступ к результатам</Form.Label>
          <Form.Select {...register('results_access', { 
            setValueAs: value => value === "true" // преобразуем строку в boolean
          })}>
            <option value="true">Дать доступ</option>
            <option value="false">Не давать</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="test_id">
          <Form.Label>ID теста</Form.Label>
          <Form.Control 
            type="text" 
            {...register('test_id')} 
            readOnly
            plaintext
          />
        </Form.Group>
      </Row>

      {/* <Button variant="primary" type="submit">
        Сохранить основные данные
      </Button> */}
    </Form>
  );
};

export default FormMainData;