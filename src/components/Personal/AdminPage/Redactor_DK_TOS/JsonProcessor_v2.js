import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Card, Alert } from 'react-bootstrap';

import { PostRequestsWithHeadersData } from '../../../../api/PostRequestsWithHeadersData';

import ArrayToString from '../../../../api/api_url_connection';
import { BaseUrl } from '../../../../constans/Main_api_url';
import { Api_test } from '../../../../constans/Test_api_url';

const JsonProcessorV2 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setError('');
    setSuccess('');
    const file = e.target.files[0];
    
    if (!file) return;

    if (file.type !== "application/json") {
      setError('Пожалуйста, загрузите файл в формате JSON');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = JSON.parse(event.target.result);
        setFileContent(content);
      } catch (err) {
        setError('Невалидный JSON файл');
        console.error('Ошибка парсинга JSON:', err);
      }
    };
    reader.readAsText(file);
  };

  const onSubmit = async(formData) => {
    if (!fileContent) {
      setError('Пожалуйста, загрузите JSON файл');
      return;
    }

    const result = {
      name: formData.name,
      description: formData.description,
      data: fileContent
    };
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const resultSend=await PostRequestsWithHeadersData(ArrayToString([BaseUrl,Api_test["add"]]), result, userData.api_session_key )
    if (resultSend.error){
      alert(`Не удалось загрузить файлы.${resultSend.detail} Код ошибки ${resultSend.status}`)
      console.log('Обработанные данные:', result);
    }else{
      console.log('Обработанные данные:', result);
      setSuccess('Файл успешно загружен и обработан');
      alert('Файл загружен');
    }
      // console.log('Обработанные данные:', result);
      // setSuccess('Файл успешно загружен и обработан');
      // alert('Файл загружен');
  };

  return (
    <Card>
      <Card.Header as="h5">Обработка JSON файла</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите имя"
              {...register("name", { required: "Поле обязательно для заполнения" })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Введите описание"
              {...register("description", { required: "Поле обязательно для заполнения" })}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">
              {errors.description?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Загрузите JSON файл</Form.Label>
            <Form.Control 
              type="file" 
              accept=".json,application/json"
              onChange={handleFileChange}
            />
            <Form.Text className="text-muted">
              Файл должен быть в формате JSON
            </Form.Text>
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Button variant="primary" type="submit">
            Обработать
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default JsonProcessorV2;