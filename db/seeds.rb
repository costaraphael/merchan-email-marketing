# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

roles = Role.create(
    [
        {nome: 'Administrador', identificador: 'admin'},
        {nome: 'Coordenador', identificador: 'coordenador'},
        {nome: 'Usuário', identificador: 'usuario'}
    ]
)
grupo = GrupoUsuario.create nome: 'Administrador'
Usuario.create({
                   nome: 'Administrador',
                   login: 'admin',
                   grupo_usuario: grupo,
                   role: roles[0],
                   ativo: true,
                   senha: '56fca427e2fd12ce5bb82248966c5d0aeb5a7e55',
                   salt: '9ce9877232403522eb295c0aaee717da01d0f4aa'
               })