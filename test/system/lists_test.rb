require 'application_system_test_case'

class ListsTest < ApplicationSystemTestCase
  setup { puts 'doing some setup!' }

  test 'edit an item name' do
    sign_in(users(:user1))

    test_list = lists(:user1_list1)
    test_item = items(:user1_list1_item3)

    # Go to list
    visit user_list_url test_list.user_id, test_list.id
    sleep 2

    # Edit item
    find('a', text: test_item.name).sibling('a.item-edit-link').click
    item_text_input = find_field("item-#{test_item.id}-name")
    item_text_input.click
    assert has_focus?(item_text_input), 'Item text input not selected' # <= if not true, problem!
    sleep 1
    item_text_input.send_keys(:backspace, :backspace, :backspace) # <= this works even if the typical "click + type" doesn't...
    assert puts has_focus?(item_text_input)
  end
end
