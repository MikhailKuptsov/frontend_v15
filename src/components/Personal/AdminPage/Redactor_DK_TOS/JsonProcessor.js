import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Card, Alert } from 'react-bootstrap';

import { PostRequestsWithHeadersData } from '../../../../api/PostRequestsWithHeadersData';

import ArrayToString from '../../../../api/api_url_connection';
import { BaseUrl } from '../../../../constans/Main_api_url';
import { Api_test } from '../../../../constans/Test_api_url';

const JsonProcessor = () => {
  const { handleSubmit } = useForm();
  const [fileContent, setFileContent] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setError('');
    setSuccess('');
    const file = e.target.files[0];
    
    if (!file) {
      return;
    }

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

  const onSubmit = async() => {
    if (!fileContent) {
      setError('Пожалуйста, загрузите JSON файл');
      return;
    }
    const userData = JSON.parse(sessionStorage.getItem('user_data'));
    const result=await PostRequestsWithHeadersData(ArrayToString([BaseUrl,Api_test["add"]]),fileContent, userData.api_session_key )
    if (result.error){
      alert(`Не удалось загрузить файлы. Код ошибки ${result.status}`)
    }else{
      console.log('Обработанные данные:', fileContent);
      setSuccess('Файл успешно загружен и обработан');
      alert('Файл загружен');
    }
  };

  return (
    <Card>
      <Card.Header as="h5">Обработка JSON файла</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Загрузите JSON файл</Form.Label>
            <Form.Control 
              type="file" 
              accept=".json,application/json"
              onChange={handleFileChange}
            />
            <Form.Text className="text-muted">
              Выберите файл в формате JSON для обработки
            </Form.Text>
          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Button variant="primary" type="submit" size='lg'>
            Загрузить
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default JsonProcessor;