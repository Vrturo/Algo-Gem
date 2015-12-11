lib = File.expand_path("../lib/", __FILE__)

Gem::Specification.new do |s|
  s.name        = 'algo-gem'
  s.version     = '0.0.1'
  s.date        = '2015-12-10'
  s.summary     = "Algorithms & built in methods"
  s.description = "Gem for Algorithms and methods that manipulate data structures"
  s.authors     = ["Arturo Perez"]
  s.email       = 'VrturoPerez@gmail.com'
  s.executables           = ['algo-gem']
  s.require_paths         = %w[lib]
  s.files       = [
    "bin/algo-gem",
    "lib/algo-gem.rb",
    "lib/algo-gem/quicksort.rb"]
  s.homepage    = 'http://www.github.com/vrturo/algo-gem'
  s.license       = 'MIT'
end
