import { UsuarioService, Usuario } from '../../src/ts/usuarioService';

describe('Testes Unitários - UsuarioService (TS)', () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  test('Deve cadastrar um usuário válido com sucesso', () => {
    const novoUsuario: Usuario = {
      id: 1,
      nome: 'Gustavo',
      email: 'gustavo@email.com',
      idade: 22,
    };

    const resultado = service.cadastrarUsuario(novoUsuario);

    expect(resultado).toEqual(novoUsuario);
    expect(service.buscarPorId(1)).toBeDefined();
  });

  test('Deve lançar erro ao tentar cadastrar usuário menor de idade', () => {
    const usuarioMenor: Usuario = {
      id: 2,
      nome: 'Lucas',
      email: 'lucas@email.com',
      idade: 16,
    };

    expect(() => service.cadastrarUsuario(usuarioMenor)).toThrow(
      'O usuário deve ser maior de idade'
    );
  });
});