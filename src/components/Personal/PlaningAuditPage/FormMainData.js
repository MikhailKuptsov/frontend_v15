import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Select from 'react-select';

const FormMainData = ({ data, onChange, userOptions, facilityOptions }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      ...data,
      results_access: data.results_access === "choice_true"
    }
  });

  // Следим за изменениями формы в реальном времени (опционально)
  const formValues = watch();

  const onSubmit = (formData) => {
    // Передаем все данные формы, включая текстовые поля и даты
    onChange({
      ...formData,
      // activation и results_access уже в правильном формате
    });
    
    // Выводим текущие значения в консоль (для отладки)
    console.log("Текущие значения формы:", {
      name: formData.name,
      description: formData.description,
      start_datetime: formData.start_datetime,
      end_datetime: formData.end_datetime,
      activation: formData.activation,
      results_access: formData.results_access,
      facility_id: formData.facility_id,
      audit_leader: formData.audit_leader,
      test_id: formData.test_id
    });
  };

  // Обработчик изменений для Select-полей
  const handleSelectChange = (fieldName, selectedOption) => {
    onChange({
      [fieldName]: selectedOption?.value
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
            onChange={(e) => onChange({ name: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            {...register('description')}
            onChange={(e) => onChange({ description: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="facility_id">
          <Form.Label>Объект</Form.Label>
          <Select 
            options={facilityOptions} 
            placeholder="Выберите объект"
            onChange={(selected) => handleSelectChange('facility_id', selected)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="audit_leader">
          <Form.Label>Руководитель аудита</Form.Label>
          <Select 
            options={userOptions} 
            placeholder="Выберите руководителя"
            onChange={(selected) => handleSelectChange('audit_leader', selected)}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="start_datetime">
          <Form.Label>Дата начала</Form.Label>
          <Form.Control 
            type="datetime-local" 
            {...register('start_datetime')}
            onChange={(e) => onChange({ start_datetime: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="end_datetime">
          <Form.Label>Дата окончания</Form.Label>
          <Form.Control 
            type="datetime-local" 
            {...register('end_datetime')}
            onChange={(e) => onChange({ end_datetime: e.target.value })}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="activation">
          <Form.Label>Активация</Form.Label>
          <Form.Select 
            {...register('activation')}
            onChange={(e) => onChange({ activation: e.target.value })}
            required
          >
            <option value="on_demand">По требованию</option>
            <option value="by_datetime">По расписанию</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="results_access">
          <Form.Label>Доступ к результатам</Form.Label>
          <Form.Select 
            {...register('results_access')}
            onChange={(e) => onChange({ results_access: e.target.value === "true" })}
            required
          >
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