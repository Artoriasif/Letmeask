import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import {Link,  useNavigate} from 'react-router-dom';
import { FormEvent, useState } from "react";
import "../styles/auth.scss";
import { Button } from "../components/button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { ref, set, push } from "firebase/database";

export function NewRoom() {

  const navigate = useNavigate()
  const [newRoom, setNewRoom] = useState('');

  const handleCrateRoom = async (event: FormEvent) => {
    event.preventDefault();
    
    if(newRoom.trim() === ''){
      return;
    }
    const roomsRef = ref(database, 'rooms');
    const newRoomsRef = push(roomsRef);
     set(newRoomsRef, {
      title: newRoom,
      authorId: user?.id
    })
    navigate(`/rooms/${newRoomsRef.key}`);
    
  }

  

  const {user} = useAuth()

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCrateRoom}>
            <input type="text" placeholder="Nome da sala" onChange={(e)=> setNewRoom(e.target.value)} value={newRoom}/>
            <Button type="submit">Criar sala</Button>
            
          </form>
          <p>
              Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
