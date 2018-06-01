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

DATA_DIR = "./static/data"
SKY_DIR = "./static/VirtualSky"
TERM = {
    en: {
        star: "stars",
        constellation: "constellations"
    },
    ko: {
        star: "별",
        constellation: "별자리"
    }
}

class Universe

    attr_accessor :locale, :lang_json, :init_json, :formatted_search_bases

    def initialize(locale)
        @locale = locale
        @lang_json = JSON.parse(File.open("#{SKY_DIR}/lang/#{locale}.json", "r").read)
        @init_json = JSON.parse(File.open("#{DATA_DIR}/initializer.json", "r").read)
        @formatted_search_bases = []
    end

    def reseed
        generate_constellations
        p "#{locale} : Constellation Search Seeded"
        generate_stars
        p "#{locale} : Star Search Seeded"
        return formatted_search_bases
    end

    # Seed Constellations
    def generate_constellations
        line_file = File.open("#{SKY_DIR}/lines_latin.json", "r")
        lines_array = JSON.parse(line_file.read)["lines"]

        lines_array.each_with_index do |line, i|
            symbol, ra_decimal, dec_decimal = line[0], line[1], line[2]
            next if ra_decimal.nil? || dec_decimal.nil?
            formatted_search_bases << serialize(lang_json["constellations"]["#{symbol}"], ra_decimal, dec_decimal, 'constellation')
        end
    end

    # Seed Stars Approximated Position
    def generate_stars
        star_file = File.open("#{DATA_DIR}/stars.json", "r")
        stars_array = JSON.parse(star_file.read)["stars"]

        stars_array.each_with_index do |star, i|
            symbol, ra_decimal, dec_decimal = star[0], star[2], star[3]
            next if ra_decimal.nil? || dec_decimal.nil? || lang_json["starnames"]["#{symbol}"].nil?
            formatted_search_bases << serialize(lang_json["starnames"]["#{symbol}"], ra_decimal, dec_decimal, 'star')
        end
    end

    private

        def serialize(name, ra_decimal, dec_decimal, type)
            data = {
                target: {name: name},
                ra: {decimal: ra_decimal},
                dec: {decimal: dec_decimal },
                type: TERM[:"#{locale}"][:"#{type}"]
            }
        end
end

LOCALES = ["en", "ko"]

LOCALES.each do |lang|
    dir, file = "#{DATA_DIR}/#{lang}", "#{DATA_DIR}/#{lang}/search_base.json"
    Dir.mkdir(dir) unless File.exists?(dir)
    File.delete(file) if File.exist?(file)

    universe = Universe.new(lang)
    seeds = universe.reseed
    formatted_file = File.new(file, "w")
    formatted_file.puts(seeds.to_json)
    formatted_file.close
    p "#{file} Generated"
end

p "#{environment[:test] ? 'Test ' : ''}Seed Generated."
