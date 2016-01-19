# Input
# The input consists of a single non-empty string, consisting only of uppercase English letters,
# the string's length doesn't exceed 200 characters

# Output
# Return the words of the initial song that Polycarpus used to make a dubsteb remix.
# Separate the words with a space.


# Examples
# song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
#   #  =>  WE ARE THE CHAMPIONS MY FRIEND
# WUB should be replaced by 1 space
# multiples WUB should be replaced by only 1 space
# heading or trailing spaces should be removed


# def song_decoder(song)
#   song.gsub(/(WUB)+/, ' ').strip
# end

# def song_decoder(song)
#   song.gsub('WUB', ' ').strip.squeeze(' ')
# end

# def song_decoder(song)
#   while song.include?("WUB")
#     song["WUB"]=" "
#   end
#   song.split.join(" ")
# end

# ----------UNFINISHED-----

# def song_decoder(song)
#   count = song.scan(/WUB/).length
#   count.times { song.sub!(/WUB/,' ') }
#   song.include?(" ") ? song.squeeze!(" ") : song
#   puts song
#   if song[0] == " " || song[-1] == " "
#     song.slice! 0
#     song.slice! -1
#   elsif song[-1] == " "
#     song.slice! -1
#   elsif song[0] == " "
#     song.slice! 0
#   end
#   song.squeeze(" ")
# end

# ----------------------------


# Our fruit guy has a bag of fruits (array of strings) where some fruits are rotten,
# he wants to replace all the rotten fruits by good ones.
# For example, given this array ["apple","rottenBanana","apple"] the replaced array should be
# ["apple","banana","apple"]. Your task is to implement a method that will take as an argument
# an array of strings containing fruits and should return an array of strings where all the rotten fruits
# are replaced by good ones.

# Note: If the array is null or empty you should return empty array ([]).
# The rotten fruit name will be in this format rottenFruitname where is the 1st letter of the fruit name
# is uppercase. NB: The returned array should be in LOWER case.


# def remove_rotten(basket)
#   basket ||= []
#   basket.map { |fruit| fruit.gsub('rotten','').downcase }
# end

# def remove_rotten(fruitBasket)
#   if fruitBasket == nil
#      fruitBasket = []
#   else
#     fruitBasket.map {|fruit| fruit.gsub('rotten', '').downcase}
#   end
# end

# def remove_rotten(fruitBasket)
#   if fruitBasket == []
#     []
#   elsif fruitBasket == nil
#     []
#   else
#     fruitBasket.each do |fruit|
#       while fruit["rotten"]
#         fruit.gsub!("rotten", "")
#         fruit.downcase!
#       end
#      end
#    end
# end


