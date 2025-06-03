import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import * as htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

const RechartChart = ({ right_value }) => {
    const [showModal, setShowModal] = useState(false);
    const chartRef = useRef(null);

    // Функция для скачивания графика
    const downloadChart = async () => {
        if (chartRef.current) {
            try {
                const dataUrl = await htmlToImage.toPng(chartRef.current, {
                    quality: 1,
                    pixelRatio: 2
                });
                saveAs(dataUrl, 'график-результатов.png');
            } catch (error) {
                console.error('Ошибка при создании изображения:', error);
            }
        }
    };

    // Компонент для кастомного отображения значений
    const renderCustomizedLabel = (props) => {
        const { x, y, width, value } = props;
        const radius = 10;

        return (
            <g>
                <text
                    x={x + width + 10}
                    y={y + radius}
                    fill="#666"
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize={12}
                >
                    {value}
                </text>
            </g>
        );
    };

    return (
        <div className="container mt-3">
            <Button 
                variant="primary" 
                onClick={() => setShowModal(true)}
                className="mb-3"
            >
                Показать график результатов
            </Button>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>Результаты аудита</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div 
                        ref={chartRef}
                        style={{ 
                            width: '100%', 
                            height: '400px',
                            minHeight: '300px',
                            padding: '10px'
                        }}
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={right_value}
                                layout="vertical"
                                margin={{
                                    top: 20,
                                    right: 40,
                                    left: 20,
                                    bottom: 20,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" width={100} />
                                <Tooltip />
                                <Legend />
                                <Bar 
                                    dataKey="value" 
                                    fill="#8884d8" 
                                    name="Количество 'да'"
                                >
                                    <LabelList dataKey="value" content={renderCustomizedLabel} />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Закрыть
                    </Button>
                    <Button variant="success" onClick={downloadChart}>
                        Скачать график (PNG)
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RechartChart;