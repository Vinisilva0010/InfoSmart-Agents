import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Agentes from './pages/Agentes'; // <- adicionado
import Header from './components/Header';
import Chat from './pages/Chat';
import ChatbotFlutuante from './components/ChatbotFlutuante';
import AgenteDetalhe from "./pages/AgenteDetalhe";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white font-sans">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/agentes" element={<Agentes />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/agente/:id" element={<AgenteDetalhe />} /> {/* nova rota */}
        </Routes>
          {/* ✅ Chatbot sempre visível */}
        <ChatbotFlutuante />
      </div>
    </Router>
  );
}

export default App;
