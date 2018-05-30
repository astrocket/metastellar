require 'json'
require 'optparse'

environment = {}

optparse = OptionParser.new do |opts|
  environment[:test] = false
  opts.on( '-test', '--test', 'Generates only 5 stars.' ) do
    environment[:test] = true
  end
end

optparse.parse!

RAW_FILE = "raw_stars.json"
CONSTELLATION_FILE = "constellation.json"

raw_stars = File.open(RAW_FILE, "r")
stars_array = Kernel.eval(raw_stars.read)
stars_array = stars_array.first(5) if environment[:test]
formatted_stars = []
stars_array.each_with_index do |star, i|
    formatted_stars << {
        target: {name: "#{i}"},
        ra: {decimal: star[2]},
        dec: {decimal: star[3]}
    }
end

File.delete(CONSTELLATION_FILE)
formatted_file = File.new(CONSTELLATION_FILE, "w")
formatted_file.puts(formatted_stars.to_json)
formatted_file.close

p "#{environment[:test] ? 'Test' : ''} Constellation Generated."
