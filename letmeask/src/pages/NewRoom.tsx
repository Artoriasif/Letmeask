import React from "react"
import Illustration from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import iconGoogle from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import {Button} from '../components/Button';

export function NewRoom(){
    return(
        <div id="page-auth">
      <aside>
        <img
          src={Illustration}
          alt="ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p> Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
            <img src={logo} alt="" />
            <h2>Criar uma nova sala</h2>
            <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">
                Criar sala
            </Button>
            </form>
            <p>
                Quer entrar em uma sala existente?<a href="#">Clique aqui.</a>
            </p>
        </div>
      </main>
    </div>
    )
}