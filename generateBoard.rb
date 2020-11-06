require 'faker'
require 'json'
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


online = true
checkonline=%x[ping google.com -c1 -w500 | tail -1].to_s.strip! 
online = false if  checkonline.empty?

total = 21
pexel = false
images = []
if online
  pexel = true
  PEXELAPI=%x[cat .env | grep PEXELAPI |  cut -d'=' -f2- ] if File.file?('.env')
  pexel = false if PEXELAPI.empty?
  imgpage=%x[curl -sH "Authorization: $(cat .env | grep PEXELAPI |  cut -d'=' -f2- )" "https://api.pexels.com/v1/search?query=people"] if pexel 
  # " fix for Visual Studio coloring
  # puts pexel
  # puts PEXELAPI
  # puts '.....'
  imgsjson = JSON.parse(imgpage)
  # puts imgpage
  # puts imgsjson
  # puts '.....'
  total = 0
  imgsjson.each  do | k, v | 
    # p k
    # p v  
    if k == 'photos'
      v.each  do | item | 
        # p item
        item.each  do | kk, vv | 
          # p kk
          total += 1 if kk == 'id' 
          if kk == 'src'
            # p vv 
            # vv.each  do | kkk, vvv |
            # p kkk 
            image = { 'medium' => vv['medium'], 'original' => vv['original'] }
            images << image
          end 
        end 
      end 
    end 
    # p imgsjson[k]
  end 
  puts total
  puts '.....'
  # p images
  # puts '.....'
  # Kernel.exit(false)
end 
# total.times do | i |
#   p images[i]['medium'].to_s
# end
# Kernel.exit(false)

nicknames = [] 
baseUrl = 'https://github.com/salbador/schunppertag-react-typescript-redux-architecture'
highscores = []
total.times do | i |
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
    if online
      imgsmall = images[i]['medium'].to_s
      imgsmall = img1 if  imgsmall.empty?
      imgbig = images[i]['original'].to_s
      imgbig = img2  if imgbig.empty?
    else 
      imgsmall = img1
      imgbig = img2 
      # img3 = Faker::Fillmurray.image(grayscale: false, width: 210, height: 295)
    end 
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
            "medium": "' +  imgsmall  + '",
            "original": "' +  imgbig  + '"
          },
          "_links": { "self": { "href": "' +  baseUrl  + '/' +  id  + '" } }
        },
        "character": {
          "id": ' +  id2  + ',
          "url": "' +  baseUrl  + '/' +  id2  + '", 
          "name": "' +  nickname  + '",
          "image": {
            "medium": "' +  imgsmall  + '",
            "original": "' +  imgbig  + '"
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
  
