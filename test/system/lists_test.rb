require 'application_system_test_case'

class ListsTest < ApplicationSystemTestCase
  test 'create a new item' do
    visit login_url
    fill_in 'Email', with: 'user1@email.com'
    fill_in 'Password', with: 'password'
    click_button 'Log In'

    test_list = lists(:user1_list1)
    visit user_list_url test_list.user_id, test_list.id
    assert_current_path user_list_path test_list.user_id, test_list.id

    #...more
  end
end
