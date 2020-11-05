require 'faker'

def generateNick(nicknames, r)
    nickname = ((r > 20) ? 
    ((r > 40) ? 
        ((r > 60) ? 
            ((r > 80) ? Faker::FunnyName.two_word_name 
                : Faker::JapaneseMedia::DragonBall.character) 
            : Faker::TvShows::Buffy.character)  
        : Faker::Movies::StarWars.character) 
    : Faker::GreekPhilosophers.name)
    if nicknames.include? nickname
        nickname = generateNick(nicknames, r)
    end 
    nickname
end  
nicknames = [] 
baseUrl = 'https://github.com/salbador/schnuppertag-react-typescript-redux-architecture'
highscores = []
21.times do | i |
    r = rand 100
    id = (10709 + i).to_s
    score = (3000 - (i * i + (i * i))).to_s 
    id2 = (11320 + i).to_s
    name = Faker::Name.name
    url = name.downcase.gsub(' ', '-')
    address = Faker::Address
    gender = Faker::Gender.binary_type == 'Female' ? 'woman' : 'man'
    img1 = Faker::LoremFlickr.image(size: "210x295", search_terms: [ address.country, 'face', 'human', gender])
    img2 = Faker::LoremFlickr.image(size: "690x1035", search_terms: [ address.country, 'face', 'human', gender])
    img3 = Faker::Fillmurray.image(grayscale: false, width: 210, height: 295)
    nickname = generateNick(nicknames, r)
    nicknames << nickname
    highscores << '{
        "person": {
          "id": ' +  id  + ',
          "url": "' +  baseUrl  + '/' + id + '/' +  url + '",
          "name": "' +  name  + '",
          "country": { "name": "' +  address.country  + '", "code": "' +  address.country_code  + '", "timezone": "' +  address.time_zone  + '" },
          "deathday": null,
          "score": ' +  score  + ',
          "gender": "' +  Faker::Gender.binary_type  + '",
          "image": {
            "medium": "' +  img1  + '",
            "original": "' +  img2  + '"
          },
          "_links": { "self": { "href": "' +  baseUrl  + '/' +  id  + '" } }
        },
        "character": {
          "id": ' +  id2  + ',
          "url": "' +  baseUrl  + '/' +  id2  + '", 
          "name": "' +  nickname  + '",
          "image": {
            "medium": "' +  img1  + '",
            "original": "' +  img2  + '"
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
  
