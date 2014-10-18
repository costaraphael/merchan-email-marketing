require 'test_helper'

class IndexControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get login" do
    get :login
    assert_response :success
  end

  test "should get logar" do
    get :logar
    assert_response :success
  end

  test "should get logout" do
    get :logout
    assert_response :success
  end

end
