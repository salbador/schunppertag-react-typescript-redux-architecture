tasks = []
checkmark = "[✅]" 
line_num=0
text=File.open('db/tasks.text').read
text.gsub!(/\r\n?/, "\n")
baseValues = Hash.new { |hash, key| block }
text.each_line do |line|
  continue if line.nil? 
  parts=line.split("|")
  name=parts[0]
  descr=parts[1].gsub(/\r?/, "").gsub(/\n?/, "")
  continue if name.nil? 
  continue if descr.nil?
  baseValues[name] = descr
  print "#{line_num += 1} #{name} -> #{descr}"
end

img1 = "https://source.unsplash.com/random/250x140"
img2 = "https://source.unsplash.com/random/590x375"
baseUrl = 'https://github.com/salbador/schunppertag-react-typescript-redux-architecture'
imga = "https://raw.githubusercontent.com/salbador/schunppertag-react-typescript-redux-architecture/master/assets/images/taska.jpg"
imgb = "https://raw.githubusercontent.com/salbador/schunppertag-react-typescript-redux-architecture/master/assets/images/taskb.jpg"
tasks = []
i = 0

online = true
checkonline=%x[ping google.com -c1 -w500 | tail -1].to_s.strip! 
online = false if  checkonline.empty?

# Kernel.exit(false)

baseValues.each do | name, descr |
    i += 1
    r = rand 100
    id = (4154 + i).to_s
    imgsmall = img1
    imgbig = img2
    if online
      imgsmall=%x[curl -Is https://source.unsplash.com/random/250x140 | grep "Location: http" | cut -d' ' -f2-].to_s.strip! 
      imgsmall = img1 if imgsmall.empty?
      imgbig=%x[curl -Is https://source.unsplash.com/random/590x375 | grep "Location: http" | cut -d' ' -f2-].to_s.strip! 
      imgbig = img2  if imgbig.empty?
    end 
    if name.to_s === 'Task A' 
      imgsmall = imga
      imgbig = imga
    elsif name.to_s === 'Task B' 
      imgsmall = imgb
      imgbig = imgb
    end
    tasks << '{
        "id": ' + id +',
        "url": "' + baseUrl +'/master/",
        "name": "' + name.to_s + '",
        "milestone": 0,
        "number": ' + i.to_s + ',
        "type": "regular",
        "addeddate": "2020-11-03",
        "addedtime": "22:00",
        "addedstamp": "2020-11-03T03:00:00+00:00",
        "runtime": 60,
        "image": {
          "medium": "' + imgsmall.to_s + '",
          "original": "' + imgbig.to_s + '"
        },
        "summary": "<p>' + checkmark + ' ' + descr.to_s + '</p>",
        "_links": { "self": { "href": "' + baseUrl +'" } }
      }'
       
end 

puts '['
puts tasks.join(',')
puts ']'

begin
  file = File.open('db/tasks.json', "w")
  file.write("[") 
  file.write(tasks.join(','))
  file.write("]") 
rescue IOError => e
  #some error occur, dir not writable etc.
ensure
  file.close unless file.nil?
end
  
