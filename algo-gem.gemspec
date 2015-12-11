lib = File.expand_path("../lib/", __FILE__)

Gem::Specification.new do |s|
  s.name                  = "algo-gem"
  s.version               = "0.0.1"
  s.summary               = "Algorithms & built in methods"
  s.description           = "Gem for Algorithms and methods that manipulate data structures"
  s.authors               = ["Arturo Perez"]
  s.email                 = "VrturoPerez@gmail.com"
  s.required_ruby_version = ">= 2.2.1"
  s.executables           = ['algo-gem']
  s.require_paths         = %w[lib]
  s.files                 = [
    "lib/algo-gem.rb",
    "bin/algo-gem"
  ]
  s.homepage              = "http://www.github.com/vrturo/algo-gem"
  s.license               = "MIT"
end
