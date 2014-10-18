module ApplicationHelper
  def create_link(route, text, icon)
    content_tag :li do
      link_to route do
        (text + content_tag(:div) do
          image_tag "icons/#{icon}.png"
        end).html_safe
      end
    end
  end
end
