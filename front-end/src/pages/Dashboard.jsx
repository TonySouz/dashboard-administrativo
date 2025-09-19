import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import api from '../services/api';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  const chartData = {
    labels: products.map(p => p.name),
    datasets: [{
      label: 'Estoque',
      data: products.map(p => p.stock)
    }]
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div style={{ maxWidth: 800 }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
}