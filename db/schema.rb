# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141020032651) do

  create_table "campanhas", force: true do |t|
    t.string   "nome"
    t.integer  "criador_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "campanhas", ["criador_id"], name: "index_campanhas_on_criador_id", using: :btree

  create_table "destinatarios", force: true do |t|
    t.string   "nome"
    t.string   "email"
    t.boolean  "status"
    t.string   "sexo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "grupo_usuarios", force: true do |t|
    t.string   "nome"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lista_destinatarios", force: true do |t|
    t.integer  "lista_id"
    t.integer  "destinatario_id"
    t.boolean  "ativo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "lista_destinatarios", ["destinatario_id"], name: "index_lista_destinatarios_on_destinatario_id", using: :btree
  add_index "lista_destinatarios", ["lista_id"], name: "index_lista_destinatarios_on_lista_id", using: :btree

  create_table "listas", force: true do |t|
    t.string   "nome"
    t.integer  "usuario_id"
    t.boolean  "publica"
    t.boolean  "global"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "listas", ["usuario_id"], name: "index_listas_on_usuario_id", using: :btree

  create_table "mensagens", force: true do |t|
    t.integer  "campanha_id"
    t.boolean  "enviada"
    t.datetime "envio"
    t.text     "texto"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "mensagens", ["campanha_id"], name: "index_mensagens_on_campanha_id", using: :btree

  create_table "roles", force: true do |t|
    t.text     "nome"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "identificador"
  end

  create_table "usuarios", force: true do |t|
    t.string   "nome"
    t.string   "login"
    t.string   "senha"
    t.string   "salt"
    t.integer  "grupo_usuario_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "role_id"
    t.boolean  "ativo"
    t.string   "email"
  end

  add_index "usuarios", ["grupo_usuario_id"], name: "index_usuarios_on_grupo_usuario_id", using: :btree

end
