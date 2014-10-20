require 'test_helper'

class CampanhasControllerTest < ActionController::TestCase
  setup do
    @campanha = campanhas(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:campanhas)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create campanha" do
    assert_difference('Campanha.count') do
      post :create, campanha: { criador_id: @campanha.criador_id, nome: @campanha.nome }
    end

    assert_redirected_to campanha_path(assigns(:campanha))
  end

  test "should show campanha" do
    get :show, id: @campanha
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @campanha
    assert_response :success
  end

  test "should update campanha" do
    patch :update, id: @campanha, campanha: { criador_id: @campanha.criador_id, nome: @campanha.nome }
    assert_redirected_to campanha_path(assigns(:campanha))
  end

  test "should destroy campanha" do
    assert_difference('Campanha.count', -1) do
      delete :destroy, id: @campanha
    end

    assert_redirected_to campanhas_path
  end
end
