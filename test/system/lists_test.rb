require 'application_system_test_case'

class ListsTest < ApplicationSystemTestCase
  setup do
    # Nothing yet
  end

  test 'Edit an item' do
    sign_in(users(:user1))

    test_list = lists(:user1_list1)
    test_item = items(:user1_list1_item3)

    # Go to list
    visit user_list_url test_list.user_id, test_list.id

    # Get item references - its link and its edit text input field
    item_link = find('a', text: test_item.name)
    item_link.sibling('a.item-edit-link').click
    item_text_input = find_field("item-#{test_item.id}-name")

    # User can click and get focus / type in it
    item_text_input.click
    assert has_focus?(item_text_input), "Item text input can't be selected"

    # User can update item as expected
    item_text_input.send_keys(' updated')
    click_link('Done')
    assert item_link.text == test_item.name + ' updated'
  end
end
