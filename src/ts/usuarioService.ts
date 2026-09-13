export interface Usuario {
  id: number;
  nome: string;
  email: string;
  idade: number;
}

export class UsuarioService {
  private usuarios: Usuario[] = [];

  public cadastrarUsuario(usuario: Usuario): Usuario {
    if (usuario.idade < 18) {
      throw new Error('O usuário deve ser maior de idade');
    }
    this.usuarios.push(usuario);
    return usuario;
  }

  public buscarPorId(id: number): Usuario | undefined {
    return this.usuarios.find((u) => u.id === id);
  }
}