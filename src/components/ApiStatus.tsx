import React, { useState, useEffect } from 'react';
import axios from 'axios';

type ApiStatusProps = {
  className?: string;
};

const ApiStatus: React.FC<ApiStatusProps> = ({ className = '' }) => {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [message, setMessage] = useState('Verificando conexão com o servidor...');

  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        const response = await axios.get('/api/check', { timeout: 5000 });
        setStatus('connected');
        setMessage(response.data?.message || 'API conectada com sucesso!');
      } catch (error) {
        console.error('Erro ao verificar status da API:', error);
        setStatus('error');
        setMessage('Não foi possível conectar à API. Verifique se o backend está em execução.');
      }
    };

    checkApiStatus();
  }, []);

  return (
    <div className={`rounded-md p-3 ${className} ${
      status === 'loading' ? 'bg-yellow-100 text-yellow-800' : 
      status === 'connected' ? 'bg-green-100 text-green-800' : 
      'bg-red-100 text-red-800'
    }`}>
      <div className="flex items-center">
        <div className={`h-3 w-3 rounded-full mr-2 ${
          status === 'loading' ? 'bg-yellow-500' : 
          status === 'connected' ? 'bg-green-500' : 
          'bg-red-500'
        }`}></div>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
};

export default ApiStatus; 