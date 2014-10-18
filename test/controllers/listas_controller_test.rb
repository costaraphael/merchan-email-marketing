require 'test_helper'

class ListasControllerTest < ActionController::TestCase
  setup do
    @lista = listas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:listas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create lista" do
    assert_difference('Lista.count') do
      post :create, lista: { global: @lista.global, nome: @lista.nome, publica: @lista.publica, usuario_id: @lista.usuario_id }
    end

    assert_redirected_to lista_path(assigns(:lista))
  end

  test "should show lista" do
    get :show, id: @lista
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @lista
    assert_response :success
  end

  test "should update lista" do
    patch :update, id: @lista, lista: { global: @lista.global, nome: @lista.nome, publica: @lista.publica, usuario_id: @lista.usuario_id }
    assert_redirected_to lista_path(assigns(:lista))
  end

  test "should destroy lista" do
    assert_difference('Lista.count', -1) do
      delete :destroy, id: @lista
    end

    assert_redirected_to listas_path
  end
end
