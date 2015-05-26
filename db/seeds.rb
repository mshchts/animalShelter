# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Admin.create!([
  {email: "admin@example.com", password: '00000000', password_confirmation: '00000000'}
])
News.create!([
  {title: "best conference ever", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo consectetur pretium. Vivamus rutrum viverra tortor quis blandit. Integer interdum urna sit amet eros maximus, quis tempor dolor tempus. Phasellus pharetra quis urna quis volutpat. Donec mauris massa, rutrum et suscipit sed, sagittis non nisi. Ut ac vulputate lectus. Proin turpis risus, lobortis et risus eu, fringilla dictum sapien. Integer ligula nisl, pulvinar sit amet rhoncus et, elementum et lacus. Aliquam id fringilla metus, ut placerat mi. Curabitur dignissim ligula vitae tempus imperdiet. Sed sit amet dolor vel velit ultrices pretium ut quis elit.
  Nam sagittis vestibulum pulvinar. Nulla eu tortor dapibus, dictum lacus at, bibendum ipsum. Donec vel aliquet urna. Maecenas pretium nulla nec lacus faucibus varius. Nam faucibus odio urna, vulputate commodo orci egestas vel. Nullam imperdiet, quam feugiat feugiat laoreet, odio orci mattis mi, vel accumsan odio nibh consectetur dui. Nulla at nisl vel velit euismod maximus vitae at libero. Etiam id magna in orci consectetur rutrum. Ut malesuada, ante a consectetur scelerisque, nunc nisl sagittis turpis, vel sodales tellus nisi non diam.
  Cras sed sapien molestie dolor iaculis posuere ac nec ligula. Nulla imperdiet ex at magna ultricies efficitur. Praesent sit amet augue in ex laoreet condimentum. Nam maximus nisl eu elementum faucibus. Nunc facilisis, nisl a mollis porta, ipsum mauris pellentesque elit, vitae convallis arcu risus a sem. Morbi fermentum ac tellus a lobortis. Vestibulum aliquam sollicitudin cursus. Integer condimentum viverra elit, a sodales nulla luctus ullamcorper.
  Curabitur porttitor faucibus eros eget euismod. Sed efficitur aliquam ante. Etiam volutpat non turpis at bibendum. Quisque suscipit cursus accumsan. In non maximus ex, eu porta risus. Proin tincidunt pellentesque auctor. Etiam a metus nec ante tincidunt eleifend. Cras porta vitae augue ullamcorper bibendum. Proin quis laoreet erat. Duis iaculis venenatis nisi vel hendrerit. Curabitur ac hendrerit augue.
  Phasellus luctus scelerisque euismod. Praesent blandit tempor est id faucibus. Fusce varius porta erat non dictum. Maecenas nec molestie nunc, at iaculis ex. Pellentesque id risus lacus. Proin tincidunt metus a vulputate bibendum. Phasellus vitae pellentesque orci. Aenean pharetra sem purus, at placerat augue placerat sed. Phasellus eu lobortis metus. Nulla in ipsum magna."}
])
Animals.create!([type: "Собака", name: "Нийко", sex: "мачо", size: "середній", age: "11", sterile: "деколи", description: "ходить і ниє"])