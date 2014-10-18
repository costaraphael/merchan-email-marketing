require 'test_helper'

class DestinatariosControllerTest < ActionController::TestCase
  setup do
    @destinatario = destinatarios(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:destinatarios)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create destinatario" do
    assert_difference('Destinatario.count') do
      post :create, destinatario: { email: @destinatario.email, nome: @destinatario.nome, sexo: @destinatario.sexo, status: @destinatario.status }
    end

    assert_redirected_to destinatario_path(assigns(:destinatario))
  end

  test "should show destinatario" do
    get :show, id: @destinatario
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @destinatario
    assert_response :success
  end

  test "should update destinatario" do
    patch :update, id: @destinatario, destinatario: { email: @destinatario.email, nome: @destinatario.nome, sexo: @destinatario.sexo, status: @destinatario.status }
    assert_redirected_to destinatario_path(assigns(:destinatario))
  end

  test "should destroy destinatario" do
    assert_difference('Destinatario.count', -1) do
      delete :destroy, id: @destinatario
    end

    assert_redirected_to destinatarios_path
  end
end
