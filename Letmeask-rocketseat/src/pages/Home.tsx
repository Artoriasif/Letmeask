import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { ref, get, child} from "firebase/database";
import { database } from "../services/firebase";

export function Home() {

  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');

  const navigate = useNavigate();
  

  const handleCreateRoom = async () => {
    if (!user){
      await signInWithGoogle()
      console.log('ui')
    }
    navigate("/rooms/new")   
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault()

    if (roomCode.trim() === ''){
      return;
    }

    const roomRef = ref(database);
    get(child(roomRef, `rooms/${roomCode}`)).then((snapshot) => {
      if (snapshot.exists()) {
        navigate(`/rooms/${roomCode}`)
      } else {
        alert('Room does not exists.');
        return;
      }
    }).catch((error) => {
      console.error(error);
    });

  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="imagem simulando perguntas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="icone do letmeask" />
          <button
            className="create-room"
            onClick={() => {
              handleCreateRoom();
            }}
          >
            <img src={googleIcon} alt="Logo do Google"></img>
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
            type="text" 
            placeholder="Digite o código da sala" 
            onChange={(e)=>{setRoomCode(e.target.value)}}
            value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
