require 'faker'

  
r = rand 100
baseUrl = 'https://github.com/salbador/schunppertag-react-typescript-redux-architecture'

highscores = []
21.times do | i |
    id = (10709 + i).to_s
    id2 = (11320 + i).to_s
    name = Faker::Name.name
    url = name.downcase.gsub(' ', '-')
    address = Faker::Address
    highscores << '{
        "person": {
          "id": ' +  id  + ',
          "url": "' +  baseUrl  + '/' + id + '/' +  url + '",
          "name": "' +  name  + '",
          "country": { "name": "' +  address.country  + '", "code": "' +  address.country_code  + '", "timezone": "' +  address.time_zone  + '" },
          "deathday": null,
          "gender": "' +  Faker::Gender.binary_type  + '",
          "image": {
            "medium": "' +  Faker::Fillmurray.image(grayscale: false, width: 210, height: 295)  + '",
            "original": "' +  Faker::Fillmurray.image(grayscale: false, width: 690, height: 1035)  + '"
          },
          "_links": { "self": { "href": "' +  baseUrl  + '/' +  id  + '" } }
        },
        "character": {
          "id": ' +  id2  + ',
          "url": "' +  baseUrl  + '/' +  id2  + '", 
          "name": "' +  ((r > 30) ? ((r > 60) ? Faker::FunnyName.two_word_name : Faker::GreekPhilosophers.name) : Faker::GreekPhilosophers.name)  + '",
          "image": {
            "medium": "' +  Faker::Fillmurray.image(grayscale: false, width: 210, height: 295)  + '",
            "original": "' +  Faker::Fillmurray.image(grayscale: false, width: 690, height: 1035)  + '"
          },
          "_links": { "self": { "href": "' +  baseUrl  + '/' +  id2  + '" } }
        },
        "self": false,
        "voice": false
      }'
       
end 

puts '['
puts highscores.join(',')
puts ']'

begin
  file = File.open('db/board.json', "w")
  file.write("[") 
  file.write(highscores.join(','))
  file.write("]") 
rescue IOError => e
  #some error occur, dir not writable etc.
ensure
  file.close unless file.nil?
end
  
